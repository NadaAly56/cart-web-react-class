import { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import StarRating from "./StarRating";
import { AppContext } from "../lib/AppContext";
export default class ProductOverview extends Component {
  state = {
    count: 1,
  };
  static propTypes = {
    product: PropTypes.object.isRequired,
  };
  static contextType = AppContext;
  handleCountChange = (newCount) => {
    this.setState({ count: newCount });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.product.name !== this.props.product.name)
      this.setState({ count: 1 });
  }
  render() {
    const { addProductToCart, handleOpenCart } = this.context;
    const { product } = this.props;
    const { count } = this.state;
    return (
      <div className="row product-overview">
        <div className="product-img">
          {product.inSale && (
            <div className="sale-padge">{product.saleAmount * 100}% Off</div>
          )}
          <img src={product.imgSrc} alt={product.name} />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <StarRating rating={+product.rate} />
          <div className="row">
            <h3 className="price">
              {product.inSale
                ? product.price - Math.floor(product.price * product.saleAmount)
                : product.price}{" "}
              EP
            </h3>
            {product.inSale && <p className="text-line">{product.price}</p>}
          </div>
          <p>{product.desc}</p>
          <div className="row add-action">
            <Counter count={count} onCountChange={this.handleCountChange} />
            <button
              onClick={() => {
                addProductToCart({
                  ...product,
                  count,
                });
                handleOpenCart();
              }}
            >
              Buy now
            </button>
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
