import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import AutoCompleteComponent from './Components/AutoComplete';
import { unmountComponentAtNode } from "react-dom";


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('AutoComplete Component Test', () => {
  act(() => {
    render(<AutoCompleteComponent />, container);  
  });
});
