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
  
  
})