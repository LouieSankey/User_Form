# React Testing Practice

This project demonstrates my proficiency with React Testing Library and Jest, showcasing various testing patterns and best practices in React applications.

## 🎯 Project Purpose

This repository serves as a practical demonstration of:
- Writing meaningful component tests using React Testing Library
- Following testing best practices and the "Testing Trophy" methodology
- Understanding of different types of tests (unit, integration, e2e)
- Working with Jest matchers and async testing
- Testing user interactions and form submissions
- Implementing test-driven development (TDD) principles

## 🧪 Testing Concepts Covered

- Component rendering and querying
- User event simulation
- Form validation testing
- Async operation testing
- Mocking API calls
- Testing error states
- Integration testing between components
- Testing accessibility

## 🛠️ Technologies Used

- React
- React Testing Library
- Jest
- @testing-library/user-event
- Create React App

## 🚀 Getting Started

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

## 📖 Test Examples

### Component Rendering Tests
```javascript
test('it shows two inputs and a button', () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
```

More test examples will be added as the project grows...

## 🎓 Key Learnings

- Using React Testing Library's queries effectively
- Following the "Testing Library Way" of testing user behavior
- Writing maintainable and reliable tests
- Testing from the user's perspective
- Implementing accessibility testing

## 📚 Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/)
- [Testing Trophy Pattern](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)

## 🤝 Contributing

While this is a personal learning project, I welcome discussions about testing practices and suggestions for improvement!

## 📝 License

MIT
