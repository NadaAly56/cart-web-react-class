import { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import StarRating from "./StarRating";
export default class ProductOverview extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div className="row product-overview">
        <div className="product-img">
          {this.props.product.inSale && (
            <div className="sale-padge">
              {this.props.product.saleAmount * 100}% Off
            </div>
          )}
          <img src={this.props.product.imgSrc} alt={this.props.product.name} />
        </div>

        <div className="product-info">
          <h3>{this.props.product.name}</h3>
          <StarRating rating={+this.props.product.rate} />
          <div className="row">
            <h3 className="price">
              {this.props.product.inSale
                ? this.props.product.price -
                  Math.floor(
                    this.props.product.price * this.props.product.saleAmount
                  )
                : this.props.product.price}{" "}
              EP
            </h3>
            {this.props.product.inSale && (
              <p className="text-line">{this.props.product.price}</p>
            )}
          </div>
          <p>{this.props.product.desc}</p>
          <div className="row add-action">
            <Counter />
            <button>Buy now</button>
          </div>
          <div className="row addetional-actions">
            <li className="row">
              <div className="big-circle-icon row">
                <img src="/images/icons/favorite.svg" alt="favorite" />
              </div>
              <p>add to wishlist</p>
            </li>
            <li className="row">
              <div className="big-circle-icon row">
                <img src="/images/icons/share.svg" alt="share" />
              </div>
              <p>share</p>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
