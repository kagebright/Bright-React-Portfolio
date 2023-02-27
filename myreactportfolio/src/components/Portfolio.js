import React from 'react';
import projects from './Project'

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>Check out some of my work:</p>
      <ul>
        <li>
          <a href="https://example.com/project1">Project 1</a>
        </li>
        <li>
          <a href="https://example.com/project2">Project 2</a>
        </li>
        <li>
          <a href="https://example.com/project3">Project 3</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
