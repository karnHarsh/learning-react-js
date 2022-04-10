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

### Rendering elements
*Elements are the smallest building blocks of React apps.*

```
const element = <h1>Hello, world</h1>;
```

**Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.**

```
<div id="root"></div>
```
The above must be inside some HTML file, we will call it "root" DOM node.
To render a React element into a root DOM node, pass both to *ReactDOM.render()*.
```
const elemnet = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

React **elements** are **immutable**.
An element is like a single frame in a movie: it represents the UI at a certain point of time.

The only way to update the UI is to create a new element, and pass it to ReactDOM.render().

For example, calling ReactDOM.render() inside a setInterval() as a callback.

**React only updates what's necessary** ---> whatever changes
*React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.*

### Components and Props

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

Function component is just a JavaScript function.
Class component is defined using ES6 class.

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

**Pure and Impure functions**
Functions which never attempt to change their inputs and always return the same result for the same inputs are called *pure functions*.

*Impure function example*
```
function withdraw(account, amount) {
  account.total -= amount;
}
```
**All React components must act like pure functions with respect to their props.**

### State and Lifecycle

component rendered to DOM -> mounting
component removed from DOM -> unmounting

We can declare special methods (componentDidMount and componentDidUnmount) on component class to run some code when a component mounts or unmounts.

*The componentDidMount() method runs after the component output has been rendered to the DOM.*

```
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### Handling Events

```
<button onClick={function}>Click</button>
```

In JavaScript, class methods are not bound by default.

If we pass this.function to onClick without binding, it will give undefine.

But if we bind the function in the constructor, then it will be fine.
```
this.function = this.function.bind(this);
```

There are two ways by which we can ignore the binding concept
- If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks
- You can use arrow function in callback like, onClick = {() => this.handleClick()}

But binding in the constructor is the best option available, else there are chances of unnecessary re-rendering with different values of same props in lower components.

**Passing Arguments to Event Handlers**
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
The above two lines are equivalent and either would work.

### Conditional Rendering

Nothing special here, you know more or less already.

Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.

### Lists and Keys

Lists similar to map function.

