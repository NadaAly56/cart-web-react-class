import React from "react";import BreadCrumbs from "../components/BreadCrumbs";
import ProductOverview from "../components/ProductOverview";
import Carousel from "../components/Carousel";
import { AppContext } from "../lib/AppContext";

class ProductDetails extends React.Component {
  static contextType = AppContext;
  render() {
    const breadcrumbsData = [
      { name: "Home" },
      { name: "Products" },
      { name: "POS" },
      { name: "Name Of Product" },
    ];
    const { currentProduct } = this.context;
    return (
      <>
        <BreadCrumbs list={breadcrumbsData} />
        <div className="container">
          <ProductOverview product={currentProduct} />
          <Carousel />
        </div>
      </>
    );
  }
}
export default ProductDetails;
