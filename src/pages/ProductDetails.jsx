import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductOverview from "../components/ProductOverview";
import data from "../utils/services/data";
import Carousel from "../components/Carousel";

class ProductDetails extends React.Component {
  render() {
    const breadcrumbsData = [
      { name: "Home" },
      { name: "Products" },
      { name: "Electronics" },
    ];
    return (
      <>
        <BreadCrumbs list={breadcrumbsData} />
        <div className="container">
          <ProductOverview product={data[0]} />
          <Carousel />
        </div>
      </>
    );
  }
}
export default ProductDetails;
