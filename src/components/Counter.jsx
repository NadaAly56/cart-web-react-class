import { Component } from "react";
import PropTypes from "prop-types";
export default class Counter extends Component {
  static propTypes = {
    onCountChange: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  };
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.onCountChange(this.props.count + 1);
  }

  decrement() {
    if (this.props.count > 1) {
      this.props.onCountChange(this.props.count - 1);
    }
  }

  render() {
    return (
      <div className="row counter">
        <p
          className={`${this.props.count <= 1 ? "disabled" : "pointer"}`}
          onClick={this.decrement}
        >
          {" "}
          -{" "}
        </p>
        <p>{this.props.count}</p>
        <p className="pointer" onClick={this.increment}>
          {" "}
          +{" "}
        </p>
      </div>
    );
  }
}
