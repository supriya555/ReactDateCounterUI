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

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("Nov 16 2023");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <center>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>{step}</span>
        </div>

        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
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
        {count !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </center>
    </div>
  );
}
