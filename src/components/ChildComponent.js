import React from 'react';

function ChildComponent(props) {
    const {projectName , projectType , experience} = props.projectInfo
  return (
    <>
    <div>
      <button onClick={props.increment}>Increment Count</button>
      <button onClick={props.decrement}>Decrement Count</button>
      <h3>Project Information</h3>
      <p>Project Name: {projectName}</p>
      <p>Type: {projectType}</p>
      <p>Exprience
        : {experience}
      </p>
    </div>
    </>
  );
}

export default ChildComponent;
