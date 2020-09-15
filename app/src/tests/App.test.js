import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/kevin convery/i);
  expect(linkElement).toBeInTheDocument();
});
