import { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import data from "../utils/services/data";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 2000, // Extra Large Devices
          settings: {
            slidesToShow: 4, // Show 3 slides
          },
        },
        {
          breakpoint: 992, // Large Devices
          settings: {
            slidesToShow: 2, // Show 2 slides
          },
        },
        {
          breakpoint: 768, // Medium Devices
          settings: {
            slidesToShow: 1, // Show 1 slide
          },
        },
        {
          breakpoint: 576, // Small Devices
          settings: {
            slidesToShow: 1, // Show 1 slide
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
