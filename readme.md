# Description

I built this project for learning purposes, since I wanted to become more familiarized with TDD and CDD in a React Native environment. Here are some of the technologies I used:

```
. Testing
  - cavy (e2e)
  - jest

. State management
  - redux
  - react-redux

. Async operations
  - redux-observable
  - rxjs
 
. Forms
  - react-hook-form
  
. Navigation
  - react-navigation
  
. Other
  - typescript
  - storybook
```

The idea was to develop this project by following a TDD and CDD approach using `jest`, `cavy` and `storybook`. So the workflow looked something like this: 

1. Understand the "business rules" (lol)
2. Break them down into small pieces of work
3. Focus on building nested components first:
    - write component/unit tests with `jest`
    - build the component with `storybook`
4. Write the e2e tests with `cavy`

It's a pretty simple app that has only 2 screens, `product-list` and `product-detail`. The `product-list` fetches and renders a list of products and each of them can be tapped, which would take the user to the `product-detail` page that contains just an input and a button.

So it's not a huge app, obviously, but I learned a ton while building it and had a lot of fun. 
