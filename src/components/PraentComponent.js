import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import ChildComponent1 from './ChildComponent1';
function ParentComponent(props) {
  const [count, setCount] = useState(0);
  
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  };
  const project = {
    projectName: "Project Managemant ", 
    projectType : "Web Application ", 
    experience: 5
  }
  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
    <div>{props.headerComponent}</div>
    <div>{props.footerCoponents}</div>
    <div>
      <p>Current Count: {count}</p>
      <ChildComponent increment={incrementCount} decrement={decrementCount}  
        projectInfo = {project}
      />
      <ChildComponent1  userInfo ={user}/>
    </div>
    </>
  );

}

export default ParentComponent;
