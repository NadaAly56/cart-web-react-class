import { Component } from "react";export default class Counter extends Component {
  state = {
    count: 0,
  };
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((pre) => {
      return {
        count: pre.count + 1,
      };
    });
  }
  decrement() {
    if (this.state.count > 0)
      this.setState((pre) => {
        return {
          count: pre.count - 1,
        };
      });
  }
  render() {
    return (
      <div className="row counter">
        <p
          className={`${this.state.count <= 0 ? "disabled" : "pointer"}`}
          onClick={this.decrement}
        >
          {" "}
          -{" "}
        </p>
        <p>{this.state.count}</p>
        <p className="pointer" onClick={this.increment}>
          {" "}
          +{" "}
        </p>
      </div>
    );
  }
}
