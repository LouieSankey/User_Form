import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('it receives a new user and displays it on the screen',  () => {
  render(<App />)

  const name = screen.getByRole('textbox', { name: /name/i })
  const email = screen.getByRole('textbox', { name: /email/i })

  userEvent.type(name, 'John Doe')
  userEvent.type(email, 'john.doe@example.com')

  const button = screen.getByRole('button')

  userEvent.click(button)

  expect(screen.getByText('John Doe')).toBeInTheDocument()
  expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()

  
  
})