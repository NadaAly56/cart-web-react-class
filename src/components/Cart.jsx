import { Component } from "react";import { AppContext } from "../lib/AppContext";
export default class Cart extends Component {
  static contextType = AppContext;
  render() {
    const {
      products,
      productsCount,
      removeProductFromCart,
      isCartOpen,
      handleOpenCart,
      handleCloseCart,
    } = this.context;
    return (
      <>
        <div className={`${isCartOpen ? "overlay" : "d-none"}`}></div>
        <li
          onClick={handleOpenCart}
          className="circle-icon row position-relative"
        >
          <img src="/images/icons/cart.svg" alt="cart" />
          {isCartOpen && (
            <div className="cart-card position-absolute">
              <div className="row cart">
                <div className="row justify-between w-100">
                  <h3>my cart ({productsCount})</h3>
                  <h3 onClick={handleCloseCart} className="pointer">
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
