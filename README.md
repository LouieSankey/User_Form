# React Testing Practice

A simple project demonstrating basic usage of Jest and React Testing Library. This project was created while refreshing my testing fundamentals through a Udemy course.

## 🎯 Project Overview

This project includes basic examples of:
- Component rendering tests
- Form interaction tests
- Using React Testing Library queries
- Working with Jest assertions

## 🧪 Test Examples

The project tests a basic user form component, demonstrating:
```javascript
test('it shows two inputs and a button', () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
```

## 🛠️ Technologies Used

- React
- React Testing Library
- Jest
- @testing-library/user-event

## 🚀 Running the Project

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
npm install
```

3. Run tests
```bash
npm test
```

## 📚 Key Concepts Learned

- Using React Testing Library's query methods
- Writing tests 
- Basic form testing
- Working with Jest matchers

## 📝 Notes

This is a learning project focused on testing React components. While simple in scope, it's part of a comprehensive Udemy course that involves other projects.
