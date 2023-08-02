import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  const Clickhandlar = (event) => {
    setResult(result.concat(event.target.value));
  };

  const Deleteone = () => {
    setResult(result.slice(0, -1));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleButtonClick = (value) => {
    if (value === "." && /(\.\d*)$|^\./.test(result)) {
      return;
    }
    if (/^[^\.\+\-\*\/].*$/.test(result + value)) {
      setResult((prevInput) => prevInput + value);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>

      <div className="container">
        <input
          type="text"
          className="display"
          placeholder="0"
          readOnly
          value={result}
        />
        <div className="buttons">
          <input
            type="button"
            className="operator"
            value="AC"
            onClick={clearDisplay}
          />
          <input
            type="button"
            className="operator"
            value="DEL"
            onClick={Deleteone}
          />
          <input
            type="button"
            className="operator"
            value="%"
            onClick={Clickhandlar}
          />
          <input
            type="button"
            className="operator"
            value="/"
            onClick={Clickhandlar}
          />
          <input type="button" value="1" onClick={Clickhandlar} />
          <input type="button" value="2" onClick={Clickhandlar} />
          <input type="button" value="3" onClick={Clickhandlar} />
          <input
            type="button"
            className="operator"
            value="*"
            onClick={Clickhandlar}
          />
          <input type="button" value="4" onClick={Clickhandlar} />
          <input type="button" value="5" onClick={Clickhandlar} />
          <input type="button" value="6" onClick={Clickhandlar} />
          <input
            type="button"
            className="operator"
            value="-"
            onClick={Clickhandlar}
          />
          <input type="button" value="1" onClick={Clickhandlar} />
          <input type="button" value="2" onClick={Clickhandlar} />
          <input type="button" value="3" onClick={Clickhandlar} />
          <input
            type="button"
            className="operator"
            value="+"
            onClick={Clickhandlar}
          />
          <input type="button" value="0" onClick={Clickhandlar} />
          <input type="button" value="00" onClick={Clickhandlar} />
          <input
            type="button"
            value="."
            onClick={() => handleButtonClick(".")}
          />
          <input
            type="button"
            className="operator"
            value="="
            onClick={calculate}
          />
        </div>
      </div>
    </div>
  );
}
export default Calculator;
