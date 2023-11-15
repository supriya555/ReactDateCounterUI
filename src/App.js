import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("Nov 14");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <center>
        <div>
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>

        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0 //nested ternary operator
              ? `${count} days from today is `
              : `${count} days ago from today was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </center>
    </div>
  );
}
