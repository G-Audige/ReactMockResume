import React from 'react';

function Contact(props) {
  return <>
    <div>{props.text[0]}</div>
    <div>{props.text[1]}</div>
    <div>{props.text[2]}</div>  
    </>;
}

export default Contact;
