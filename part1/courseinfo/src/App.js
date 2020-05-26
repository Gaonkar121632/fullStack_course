import React from "react";
import "./App.css";

const Header = props => {
  return (
    <h1>
      {props.course}
    </h1>
  );
};


const Parts=({part,exercise})=>{
return(
    <p>
        {part} {exercise}
    </p>
)
}

const Content=({parts,exercises})=>{
  
  
  return(
  <div>
      <Parts part={parts.part1} exercise={exercises.exercises1}/>
      <Parts part={parts.part2} exercise={exercises.exercises2}/>
      <Parts part={parts.part3} exercise={exercises.exercises3}/>

  </div>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const parts={
    part1:"Fundamentals of React",
    part2 : "Using props to pass data",
    part3 : "State of a component"
  }

  const exercises={
    "exercises1":10,
    "exercises2":7,
    "exercises3":14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises}/>
      
      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  );
};

export default App;
