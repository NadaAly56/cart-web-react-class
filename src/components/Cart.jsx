import { Component } from "react";
import { AppContext } from "../lib/AppContext";
export default class Cart extends Component {
  state = {
    isCartOpen: false,
  };
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.handleOpenCart = this.handleOpenCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
  }
  handleCloseCart(e) {
    e.stopPropagation();
    this.setState({ isCartOpen: false });
  }
  handleOpenCart() {
    this.setState({ isCartOpen: true });
  }
  render() {
    const { products, removeProductFromCart } = this.context;
    return (
      <>
        <div
          className={`${this.state.isCartOpen ? "overlay" : "d-none"}`}
        ></div>
        <li
          onClick={this.handleOpenCart}
          className="circle-icon row position-relative"
        >
          <img src="/images/icons/cart.svg" alt="cart" />
          {this.state.isCartOpen && (
            <div className="cart-card position-absolute">
              <div className="row cart">
                <div className="row justify-between w-100">
                  <h3>my cart (X)</h3>
                  <h3 onClick={this.handleCloseCart} className="pointer">
                    ✖
                  </h3>
                </div>
                {products.map((product) => {
                  return (
                    <div
                      key={product.name}
                      className="row justify-between w-100"
                    >
                      <p>{product.name}</p>
                      <div
                        className="pointer"
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        <img src="/images/icons/trash.svg" alt="trash" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </li>
      </>
    );
  }
}
