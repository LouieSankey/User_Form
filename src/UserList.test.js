import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

function renderComponent() {
  const users = [{name: 'John Doe', email: 'john.doe@example.com'}, {name: 'Jane Smith', email: 'jane.smith@example.com'}]
  render(<UserList users={users}/>)
  return {
    users
  }
}

test('render one row per user', () => {
  //render component
  renderComponent()

  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  expect(rows).toHaveLength(2)
  //find all the rows in the table
  
})

test('render the email and name of each user', () => {
  //render component
  const {users} = renderComponent()

  for (let user of users) {
    const name = screen.getByRole('cell', {name: user.name})
    const email = screen.getByRole('cell', {name: user.email})

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
  //find all the rows in the table
  
})