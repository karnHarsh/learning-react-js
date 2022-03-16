# learning-react-js

### React
A JavaScript **library** for building user interfaces (UI)

- *Declarative*: useful for creating interactive UIs, using React state, right components are updated and rendered when data is changed
- *Component-Based*: build encapsulated components that manage their own state
- *Learn Once, Write Anywhere*: if you learn web app development using ReactJS, then you will adapt with mobile development using React Native pretty quickly.


### Introducing JSX
`const element = <h1>Hello, world!</h1>;`
This is neither a string or HTML, rather it is known as **JSX**

- React embraces the fact that rendering logic is inherently coupled with other UI logic
    - how events are handled
    - how the state changes over time
    - how the data is prepared for display

React **components** contain both markup and logic.

**JSX is an expression too**
JSX can be used inside
- if statements
- for loops
- assign it to variables
- accept it as arguments
- return it from functions

*Quotes for strings and curly braces for expressions*

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```
const element = React.**createElement**(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

```
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

These objects are called **React elements**.