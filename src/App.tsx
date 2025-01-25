import { Counter } from "../lib/main";
import "./App.css";
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
