import { Component } from "react";
import PropTypes from "prop-types";

export default class BreadCrumbs extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired, // Marking list as required
  };
  render() {
    return (
      <div className="breadcrumb-container">
        <div className="container">
          <ul className="breadcrumb">
            {this.props.list.map((crumb) => {
              return <li key={crumb.name}>{crumb.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
