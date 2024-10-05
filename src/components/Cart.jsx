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
    const subTotal = products.reduce(
      (acc, current) => acc + current.price * (current.count ?? 1),
      0
    );
    return (
      <>
        <div className={`${isCartOpen ? "overlay" : "d-none"}`}></div>
        <li
          onClick={handleOpenCart}
          className="circle-icon row position-relative"
        >
          <div className="cart-padge">{productsCount}</div>
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
                {productsCount === 0 ? (
                  <div className="row w-100 justify-center">
                    <p>Cart is empty.</p>
                  </div>
                ) : (
                  <>
                    <div className="products">
                      {products.map((product) => {
                        return (
                          <div
                            key={product.name}
                            className="row justify-between w-100 product"
                          >
                            <div className="row">
                              <img
                                src={product.imgSrc}
                                alt={product.name}
                                width={85}
                                height={70}
                              />
                              <div>
                                <p>{product.name}</p>
                                <p className="price">
                                  {product.price} EGP{" "}
                                  {product.count > 1 && (
                                    <span>X {product.count}</span>
                                  )}
                                </p>
                              </div>
                            </div>
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
                    <div className="row justify-between w-100 sub">
                      <p>sub total</p>
                      <p className="total">{subTotal} EGP</p>
                    </div>
                    <button className="">go to cart</button>
                  </>
                )}
              </div>
            </div>
          )}
        </li>
      </>
    );
  }
}
