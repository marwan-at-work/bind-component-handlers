## Bind Component Handlers

automatically bind change handlers to react components

### Installation

```
npm install bind-component-handlers
```

### Reasoning

A typical react component has many change handlers i.e. controlled input tags.

There are several ways to bind such handlers, this is a way that enforces convention and ease of use.

### Use
The module takes in a class, and a context `this` and binds any function that starts with the word `handle`.
Therefore, it enforces a small naming convention in your react components and it doesn't bind every method in your class.

```javascript
import react, { Component } from 'react';
import bindComponentHandlers from 'bind-component-handlers';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    bindComponentHandlers(MyComponent, this);

    this.state = { inputVal: '' };
  }

  render() {
    const { inputVal } = this.state;

    return (
      <input onChange={ this.handleInputChange } value={ inputVal } />
    );
  }

  handleInputChange(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }
}

export default MyComponent;
```
