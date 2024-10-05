import { Component, createContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();
class AppContextProvider extends Component {
  state = {
    products: [],
  };
  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
  }
  addProductToCart(product) {
    const isProductExsist = this.state.products.find(
      (prod) => prod.id === product.id
    );
    if (!isProductExsist)
      this.setState((prevState) => ({
        products: [...prevState.products, product],
      }));
  }
  removeProductFromCart(productId) {
    this.setState((prevState) => ({
      products: prevState.products.filter(
        (product) => product.id !== productId
      ),
    }));
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          products: this.state.products,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
AppContextProvider.propTypes = {
  children: PropTypes.node,
};
export { AppContext, AppContextProvider };
