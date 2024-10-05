import { Component } from "react";
import PropTypes from "prop-types";
class StarRating extends Component {
  render() {
    const { rating, totalStars = 5 } = this.props;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "filled" : "empty"}>
          ★
        </span>
      );
    }
    return <div className="star-rating">{stars}</div>;
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number,
};

export default StarRating;
