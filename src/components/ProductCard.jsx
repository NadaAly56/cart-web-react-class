import { Component } from "react";
import PropsTypes from "prop-types";
import { AppContext } from "../lib/AppContext";
import StarRating from "./StarRating";
export default class ProductCard extends Component {
  static propTypes = {
    product: PropsTypes.object,
  };
  static contextType = AppContext;
  render() {
    const { product } = this.props;
    const { addProductToCart, handleOpenCart, handleCurrentProduct } =
      this.context;
    return (
      <div className="card">
        <div
          onClick={() => {
            handleCurrentProduct(product);
            window.scroll(0, 0);
          }}
          className="card-image pointer"
        >
          <img src={product.imgSrc} alt={product.name} width={230} />
        </div>
        <div className="card-content">
          <h3 className="item-id">{product.name}</h3>
          <p className="description">{product.desc}</p>
          <StarRating rating={+product.rate} />
          <p className="price">
            {product.inSale
              ? product.price - Math.floor(product.price * product.saleAmount)
              : product.price}{" "}
            EGP
          </p>
          <div className="row justify-between w-100s">
            <button
              className="add-to-cart"
              onClick={() => {
                addProductToCart(product);
                handleOpenCart();
                window.scroll(0, 0);
              }}
            >
              ADD TO CART
            </button>
            <div className="circle-icon">
              <img src="/images/icons/heart.svg" alt="heart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
