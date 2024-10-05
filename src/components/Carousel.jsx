import { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import data from "../utils/services/data";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };

    return (
      <div className="w-100">
        <h1>you may also like</h1>
        <Slider {...settings}>
          {data.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </Slider>
      </div>
    );
  }
}
