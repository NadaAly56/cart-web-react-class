import { Component, createContext } from "react";import PropTypes from "prop-types";

const AppContext = createContext();
class AppContextProvider extends Component {
  state = {
    products: [],
    productsCount: 0,
    isCartOpen: false,
  };
  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
    this.handleOpenCart = this.handleOpenCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
  }
  addProductToCart(product) {
    const isProductExsist = this.state.products.find(
      (prod) => prod.id === product.id
    );
    if (isProductExsist) {
      const updatedProductsList = this.state.products.map((prod) => {
        if (prod.id === product.id) prod.count = product.count;
        return prod;
      });
      this.setState(() => ({
        products: updatedProductsList,
        productsCount: updatedProductsList.reduce(
          (acc, current) => acc + current.count,
          0
        ),
      }));
    } else {
      const newProductsList = [...this.state.products, product];
      this.setState(() => ({
        products: newProductsList,
        productsCount: newProductsList.reduce(
          (acc, current) => acc + current.count,
          0
        ),
      }));
    }
  }
  removeProductFromCart(productId) {
    const updatedProductsList = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState(() => ({
      products: updatedProductsList,
      productsCount: updatedProductsList.reduce(
        (acc, current) => acc + current.count,
        0
      ),
    }));
  }
  handleCloseCart(e) {
    e.stopPropagation();
    this.setState({ isCartOpen: false });
  }
  handleOpenCart() {
    this.setState({ isCartOpen: true });
  }
  render() {
    const { products, productsCount, isCartOpen } = this.state;
    return (
      <AppContext.Provider
        value={{
          products,
          productsCount,
          isCartOpen,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
          handleOpenCart: this.handleOpenCart,
          handleCloseCart: this.handleCloseCart,
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
