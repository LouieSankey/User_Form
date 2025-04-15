import {render, screen} from '@testing-library/react' 
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button', () => {
  //render component
  render(<UserForm/>)

  //manipulate component or find an element in it
  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()


})

test('it allows users to create a user', () => {
  
  const onUserAdd = jest.fn()
  render(<UserForm onUserAdd={onUserAdd}/>)

  const nameInput = screen.getByRole('textbox', {name: /name/i})
  const emailInput = screen.getByRole('textbox', {name: /email/i})

  //simulate user interaction
  user.click(nameInput)
  user.keyboard('John Doe')

  user.click(emailInput)
  user.keyboard('john.doe@example.com')

  //simulate form submission
  const button = screen.getByRole('button')
  user.click(button)

  //assert that the onUserAdd function was called with the correct arguments  
  expect(onUserAdd).toHaveBeenCalledWith({name: 'John Doe', email: 'john.doe@example.com'})
  
  
})

test('it clears the inputs when the user is added', () => {
  render(<UserForm onUserAdd={() => {}}/>)

  const nameInput = screen.getByRole('textbox', {name: /name/i})
  const emailInput = screen.getByRole('textbox', {name: /email/i})

  user.click(nameInput)
  user.keyboard('John Doe')

  user.click(emailInput)
  user.keyboard('john.doe@example.com')

  user.click(button)

  expect(nameInput).toHaveValue('')
  expect(emailInput).toHaveValue('')
  
})