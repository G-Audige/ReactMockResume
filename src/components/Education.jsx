import React from 'react';

function Education(props) {
  return (
    <>
    <>{props.label}</>
      <div>{props.text[0]}</div>
      <div>{props.text[1]}</div>
      <div>{props.text[2]}</div>   
    </>
  );
}

export default Education;
