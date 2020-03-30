import React from "react";
import './Heading.css';

export default function heading(props) {
  return (
    <div className="heading">
      <p>{props.children}</p>
    </div>
  );
}