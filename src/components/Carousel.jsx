import { Component } from "react";import Slider from "react-slick";
import ProductCard from "./ProductCard";
import data from "../utils/services/data";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div className="carousel">
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
