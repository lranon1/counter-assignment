// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const defaultval = screen.getByText(/0/i);
  expect(defaultval).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByRole('button', {name: '+'})
  fireEvent.click(increment);
  const val = screen.getByText(/1/i);
  expect(val).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByRole('button', {name: '-'})
  fireEvent.click(decrement);
  const val = screen.getByText(/-1/i);
  expect(val).toBeInTheDocument();
});
