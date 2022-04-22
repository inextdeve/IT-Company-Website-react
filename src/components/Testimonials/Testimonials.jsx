import { Component } from "react";
import Testimony from "./Testimony";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      slidesPerView: 2.5
    };
    this.fitSlidesPerView = this.fitSlidesPerView.bind(this);
  }
  fitSlidesPerView() {
    if (window.innerWidth <= 1024 && !(window.innerWidth <= 600)) {
      this.setState({ slidesPerView: 1.3 });
    } else if (window.innerWidth <= 600) {
      this.setState({ slidesPerView: 1 });
    } else {
      this.setState({ slidesPerView: 2.5 });
    }
  }
  componentDidMount() {
    this.fitSlidesPerView();
  }

  render() {
    window.addEventListener("resize", this.fitSlidesPerView);

    return (
      <section id="testimony" className="container container__testimonials">
        <h1 className="container">What People Say About Us</h1>
        <Swiper
          className="testimonials__slide container"
          slidesPerView={this.state.slidesPerView}
          spaceBetween={20}
        >
          <SwiperSlide>
            <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Testimony img="https://reviews.tn/wp-content/uploads/2021/05/original-profile-picture-ideas-man_31.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}
export default Testimonials;
