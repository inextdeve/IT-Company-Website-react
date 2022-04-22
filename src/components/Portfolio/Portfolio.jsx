import { Component } from "react";
import Work from "./Work_box";
import "./style.css";
class Portfolio extends Component {
  constructor() {
    super();
    this.works = [
      {
        img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
        title: "Modern UI/UX Dashboard Design",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
      },
      {
        img:
          "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
        title: "Food and Consumation Web App",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
      },
      {
        img:
          "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
        title: "Future Social Media Web 3.0 d'App",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
      }
    ];
  }
  render() {
    return (
      <section className="container container__portfolio" id="portfolio">
        {/* <div className="portfolio__header">
          <h1>See Our Works Or Portfolio</h1>
          <button className="btn btn-primary">More About</button>
        </div> */}
        {this.works.map((work, index) => {
          if (index == 1) {
            return (
              <>
                <div className="portfolio__header">
                  <h1>See Our Works Or Portfolio</h1>
                  <button className="btn btn-primary">More About</button>
                </div>
                <Work img={work.img} title={work.title} text={work.text} />
              </>
            );
          }
          return <Work img={work.img} title={work.title} text={work.text} />;
        })}
      </section>
    );
  }
}
export default Portfolio;
