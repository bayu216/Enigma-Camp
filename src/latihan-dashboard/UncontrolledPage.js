import { Component, createRef } from "react";

class UncontrolledPage extends Component {
  constructor(props) {
    super(props);

    this.name = createRef();
    this.age = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Name: ${this.name.current.value},
       Age: ${this.age.current.value}`
    );
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.name} />
          </label>
          <label>
            Age:
            <input type="text" ref={this.age} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default UncontrolledPage;
