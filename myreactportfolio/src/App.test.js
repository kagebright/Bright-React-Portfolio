import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import App from './App';

let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});