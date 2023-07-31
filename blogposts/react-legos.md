---
title: 'React: The LEGO® way to build user interfaces'
date: '2023-07-19'
---

# **What is React.js & Why?**
This technology, created by Facebook software engineer **Jordan Walke**, is considered one of the most popular in the world of *web development*. In fact, it is the most popular *JavaScript library* for building *user interfaces*.

Imagine you are building a **Lego city** — traditional **JavaScript** is like receiving a massive box of random Lego bricks and starting to build everything from scratch. Don’t get me wrong, this can be fun, but it’s also *time-consuming*. If you ever want to change something, it can turn into a *tedious task*. **React** was created to solve this problem. Instead of random Lego bricks, we now have *pre-built Lego sets (components)*, complete with clear instructions on how these pieces interact with each other. This approach *saves time, reduces errors*, and simplifies the process of adjusting your Lego city (app) as you go. The city’s appearance (*user interface*) can be easily updated by swapping out or adjusting sets while keeping the rest of the city intact.


# **What are the essential features of React?**

## **Components**

These are like individual Lego sets — houses, cars, trees, etc. You build them once, and then you can reuse them in your city without having to rebuild them every time.

```jsx
import React from 'react';

// This is a functional component for a House
function House() {
  // It returns JSX that represents a heading saying "Welcome to my House!"
  return <h1>Welcome to my House!</h1>
}

// This is a functional component for a Car
function Car() {
  // It returns JSX that represents a paragraph saying "This is my car."
  return <p>This is my car.</p>
}

// This is a functional component for a Tree
function Tree() {
  // It returns JSX that represents a paragraph saying "This is a tree."
  return <p>This is a tree.</p>
}
```
## One-Way Data Flow

Think of this as a one way street in your Lego city. The traffic (data) can only flow in one direction, ensuring a smooth and predictable journey.

```jsx
import React from 'react';
import { useState } from 'react'

// This is a functional component named ParentComponent
function ParentComponent() {
  // It uses the useState hook to manage state for a name, which is initially set to 'John'
  const [name, setName] = useState('John')

  // It returns the ChildComponent and passes down the name state as a prop
  // This demonstrates the concept of "one-way data flow" from ParentComponent (parent) to ChildComponent (child)
  return <ChildComponent name={name} />
}

// This is a functional component named ChildComponent
// It accepts props as a parameter - these are properties passed down from a parent component
function ChildComponent(props) {
  // Destructuring the props parameter to directly access the name property
  const { name } = props
  
  // It returns a JSX heading element which interpolates the name prop into a greeting message
  // Here we see the prop being used, demonstrating the data flow from the parent component
  return <h1>Hello, {name}</h1>
}
```

## Virtual DOM

This is like having a blueprint of your Lego city. Whenever you want to make a change, you first make the change on the blueprint. Then you compare it with your actual city and only update the parts of the city that differ from the blueprint. This makes it very efficient to make updates to your city.

```jsx
import React from 'react'
import ReactDOM from 'react-dom';

function Welcome(props) {
  const { name } = props
  return <h1>Hello, {name}</h1>
}

// We are telling React to update the Virtual DOM by creating an instance of our Welcome component
ReactDOM.render(<Welcome name="Sarah" />, document.getElementById('root'))
```

## JSX

This is the instruction manual for your Lego sets. It provides clear, readable instructions that allow you to understand and build your components easily.

```jsx
import React from 'react'

// This is an example of JSX syntax in React
const element = <h1>Hello, world!</h1>
```

# **Why is React so popular?**

**React** is like the Lego of the web world because of its *reusability*, *flexibility*, and the *community support* behind it. On the other hand, **Vue** is like Duplo, the Lego series for toddlers. It’s very easy to use, especially for beginners, but it’s not as versatile as traditional Lego. **Angular** is like a Lego Technic set — comprehensive and capable of building complex models, but with a *steeper learning curve*. React, with its balance of flexibility and structure, has hit a sweet spot that appeals to many developers, much like a classic Lego set that can be enjoyed by both beginners and advanced builders.

# **Tips for learning React**

- **Understand JavaScript**: Knowing JavaScript before trying to learn React is like understanding how Lego blocks stick together before trying to build a large Lego set.
- **Start small**: Just as you’d start by building a small Lego set before tackling a 3,000-piece Millennium Falcon, start by building small components in React before trying to build an entire application.
- **Use the official React documentation**: It’s like the instruction manual that comes with your Lego sets — accurate, helpful, and the best source of information.
- **Just Build**: The best way to learn is by doing. Just as you’d learn more about building with Lego by creating your own custom spaceship than you would just following the instructions, you’ll learn React better by building your own projects.
- **Understand the lifecycle methods**: These methods are like the different stages of building a Lego set: unboxing (mounting), building (updating), and taking apart (unmounting).
- **Learn about hooks**: They are like specialized Lego pieces that give your Lego sets superpowers, like lighting up or moving, without needing a power functions upgrade set (component).

# **Resources to learn React.js**
- [Scrimba React Coruse](https://scrimba.com/learn/learnreact)
- [Offiicial React Documentation](https://legacy.reactjs.org/tutorial/tutorial.html)
- [Codecademy React Course](https://www.codecademy.com/learn/react-101)
- [React Tutorial Video for Beginners](https://youtu.be/SqcY0GlETPk)

# **Tools to enhance your React.js development**
- [React Developer Tools chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
