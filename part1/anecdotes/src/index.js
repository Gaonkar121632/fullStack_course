import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return (
    <button onClick={props.handler}>
      {props.text}
    </button>
  );
};
const Header = props => {
  return (
    <h1>
      {props.text}
    </h1>
  );
};

const nextOne = setSelected => {
  setSelected(parseInt(Math.random() * 10 % 6));
};

const voteMe = (selected, setVote, vote,setMax) => {
  let voteCpy = [...vote];
  voteCpy[selected] += 1;
  setVote(voteCpy);

  let i = voteCpy.indexOf(Math.max(...voteCpy));
  
  setMax(i)

};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(6).fill(0));
  const [max,setMax]=useState(0)

  return (
    <div>
      <Header text="Anecdotes of the day"/>
      {props.anecdotes[selected]}
      <p>
        has {vote[selected]} votes
      </p>
      <Button
        handler={() => {
          nextOne(setSelected);
        }}
        text="next anecdotes"
      />
      <Button
        handler={() => {
          voteMe(selected, setVote, vote,setMax);
        }}
        text="vote"
      />
      <Header text="Anecdotes with most votes"/>
      {props.anecdotes[max]}
      <p>
        has {vote[max]} votes
      </p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
