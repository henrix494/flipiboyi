# Flipiboyi Library

This library provides a set of React components and utilities for building web applications. The main component included in this library is the `Counter` component.

## Installation

To install the library, run:

```sh
npm install flipiboyi
```

## Usage

To use the `Counter` component in your project, import it from the library:

```tsx
import { Counter } from "flipiboyi";
import "flipiboyi/dist/main.css";

function App() {
  return (
    <div>
      <Counter className="test" maxNumber={100}>
        <div>asc</div>
      </Counter>
    </div>
  );
}

export default App;
```

## Components

### Counter

The `Counter` component is a customizable counter that increments up to a specified maximum number. It supports various props for customization.

#### Props

- `width` (string): The width of the counter. Default is "150px".
- `height` (string): The height of the counter. Default is "100px".
- `speed` (number): The speed of the counter. Default is 10.
- `maxNumber` (number, required): The maximum number the counter will count up to.
- `slowDown` (number): The number after which the counter will slow down.
- `jump` (number): The increment value for the counter. Default is 1.
- `className` (string): Additional CSS classes for the counter.
- `observe` (boolean): Whether to observe the counter's visibility and start counting when it becomes visible. Default is false.
- `children` (React.ReactNode): Additional content to render inside the counter.

#### Example

```tsx
import { Counter } from "flipiboyi";
import "flipiboyi/dist/main.css";

function App() {
  return (
    <div>
      <Counter className="test" maxNumber={100}>
        <div>asc</div>
      </Counter>
    </div>
  );
}

export default App;
```

## Styles

The library includes a CSS module for styling the `Counter` component. The styles are defined in `styles.module.css` and are automatically applied to the component.

## License

This project is licensed under the MIT License.
