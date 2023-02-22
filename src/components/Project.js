import React from 'react';

function Project(props) {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Visit Project</a>
    </div>
  );
}

export default Project;
