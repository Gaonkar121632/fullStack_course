import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avarage, setAvarage] = useState(0);
  const [positive, setPositive] = useState(0);

  const Header = props => {
    return (
      <h1>
        {props.text}
      </h1>
    );
  };

  const List = props => {
    return (
      <p>
        {props.text} {props.count} {props.unit}
      </p>
    );
  };
  const Button = props => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    );
  };

  const Statistics = props => {
    if (total) {
      return (
        <div>
        <List text="good" count={good} />
        <List text="neutral" count={neutral} />
        <List text="bad" count={bad} />
        <List text="all" count={total} />
        <List text="average" count={total} />
        <List text="positive" count={positive} unit="%" />
      </div>
    );
  }else{
    return(
      <div>
        <p>No feedbacks given</p>
      </div>
    )
  }
  };

  const addGood = () => {
    let goodInc = good + 1;
    let newTotal = total + 1;
    setGood(goodInc);
    setTotal(newTotal);
    setAvarage((goodInc * 1 + bad * -1) / newTotal);
    setPositive(goodInc / newTotal * 100);
  };
  const addBad = good => {
    let badInc = bad + 1;
    let newTotal = total + 1;
    setBad(bad + 1);
    setTotal(newTotal);
    setAvarage((good * 1 + badInc * -1) / newTotal);
    setPositive(good / newTotal * 100);
  };

  const addNautral = good => {
    let goodInc = good;
    let newTotal = total + 1;
    setNeutral(neutral + 1);
    setTotal(newTotal);
    setAvarage((goodInc * 1 + bad * -1) / newTotal);
    setPositive(goodInc / newTotal * 100);
  };
  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => addGood(good)} text="good" />
      <Button handleClick={() => addNautral(neutral + 1)} text="neutral" />
      <Button handleClick={() => addBad(bad + 1)} text="bad" />

      <Header text="statistics" />
      <Statistics />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
