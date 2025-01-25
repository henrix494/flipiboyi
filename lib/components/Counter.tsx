import styles from "./styles.module.css";
import { useState, useEffect, useRef } from "react";

interface Props {
  width?: string;
  height?: string;
  speed?: number;
  maxNumber: number;
  slowDown?: number;
  jump?: number;
  className?: string;
  observe?: boolean;
  children?: React.ReactNode;
}

export const Counter = ({
  width = "150px",
  height = "100px",
  speed = 10,
  maxNumber,
  slowDown,
  jump = 1,
  className,
  observe = false,
  children,
}: Props): JSX.Element => {
  const [count, setCount] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [scale, setScale] = useState(1);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observe) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const timer = setInterval(() => {
                setCount((prev) => {
                  if (prev + jump >= maxNumber) {
                    clearInterval(timer);
                    return maxNumber;
                  }
                  return prev + jump;
                });
                setScale(1.2);

                setTimeout(() => setScale(1), 100);

                if (slowDown && count > slowDown) {
                  setCurrentSpeed(100);
                }
              }, currentSpeed);

              return () => clearInterval(timer);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }
  }, [observe, currentSpeed, jump, maxNumber, slowDown, count]);

  if (!maxNumber) throw new Error("maxNumber is required");
  if (maxNumber % jump !== 0)
    throw new Error("maxNumber should be divisible by jump");

  useEffect(() => {
    if (count === maxNumber) return;
    if (!observe) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev + jump >= maxNumber) {
            clearInterval(timer);
            return maxNumber;
          }
          return prev + jump;
        });
        setScale(1.2);

        setTimeout(() => setScale(1), 100);

        if (slowDown && count > slowDown) {
          setCurrentSpeed(100);
        }
      }, currentSpeed);

      return () => clearInterval(timer);
    }
  }, [count, maxNumber, currentSpeed, slowDown, jump, observe]);

  return (
    <div
      ref={counterRef}
      style={{
        width: width,
        height: height,
      }}
      className={`${styles.container} ${className}`}
    >
      <span className="count" style={{ transform: `scale(${scale})` }}>
        {count} +
      </span>
      {children}
    </div>
  );
};
