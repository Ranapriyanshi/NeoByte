import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import sit from "../assets/22222.png";
import think from "../assets/222222.png";
import btn from "../assets/btn.png";
import web from "../assets/web.png";
import compiler from "../assets/compiler.png";
import cart from "../assets/cart.png";
import settings from "../assets/settings.png";
import rating from "../assets/rating.png";
import commerce from "../assets/comm.png";
import "../index.css";

const Services = () => {
  const child = [
    {
      name: "b1",
      imageName: web,
      content2:
        " Design bespoke website that aligns with your brand identity and resonates with your target audience.",
    },
    {
      name: "b2",
      imageName: compiler,
      content2:
        "Create unique widgets with specific functionalities to enhance your business website's user experience.",
    },
    {
      name: "b3",
      imageName: cart,
      content2:
        "Create unique widgets with specific functionalities to enhance your business website's user experience. ",
    },
  ];
  const achievementsRight = [
    {
      name: "Increased costumer retention",
      content:
        "Enriching and optimizing the customer experience can increase customer retention by 14%, and life time value by over 24%.",
    },
    {
      name: "Grow revenue, profit, and volume",
      content:
        "In an industry with tight margins, And the retention uplift means you’ll grow with your clients, and we do exactly that.",
    },
    {
      name: "Improve customer reviews",
      content:
        "Customers love brands with personality.We have been referenced in hundreds of five star reviews.",
    },
  ];
  const achievementsLeft = [
    {
      name: "Win and retain more clients",
      content:
        "Stores with web platform retain more costumers that enable them growth quickly.",
    },
    {
      name: "Reduce interteam dependancy",
      content:
        "Marketing and CX teams have live access to modify application without needing to work with fulfilment.",
    },
    {
      name: "Reduce stores and inventory",
      content:
        "Stop managing thousands of stores and inserts exactly when you need them.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="services">
        <div className="section">
          <div className="head">
            <div className="tagLine">
              <h1>
                Let's collaborate to unlock the full potential of your brand
                with our services.
              </h1>
              <p>
                Streamline your business management with us. We specialize in
                empowering the most dynamic brands to achieve unprecedented
                growth through meticulously tailored paid media campaigns and
                digital experiences.
              </p>
              <div className="demo">
                <button className="uniProj uniProj--stripe">
                  Book demo <img src={btn} alt="" className="arrow" />
                </button>
              </div>
            </div>
            <div className="demoImg">
              <img src={sit} alt="" />
            </div>
          </div>
          <div className="childContain">
            {child.map((item, index) => {
              return (
                <div className="child" id={item.name} key={index}>
                  <img
                    src={item.imageName}
                    className="divisions pebble"
                    alt=""
                  />
                  <p>{item.content2}</p>
                </div>
              );
            })}
          </div>
          <div className="ellaboration">
            <div className="detail serviceDetail">
              <div
                className="heading"
                style={{
                  width: "80%",
                  gap: "0px",
                }}
              >
                <h2>Our Results?</h2>
                <h1>Delighted costumers and grown businesses</h1>
                <p>
                  We help the most exciting brands unlock their growth through
                  carefully crafted paid media campaign and digital experiences.{" "}
                </p>
              </div>
            </div>
            <div className="horizontal">
              <div className="leftContent">
                {achievementsLeft.map((item, index) => {
                  return (
                    <div className="achievement" key={index}>
                      <h3>{item.name}</h3>
                      <p>{item.content}</p>
                    </div>
                  );
                })}
              </div>
              <div className="bubbles">
                <div className="us alternateUs" id="ba1">
                  <img src={settings} alt="" />
                </div>
                <div className="us alternateUs" id="ba2">
                  <img src={rating} alt="" />
                </div>
                <div className="us alternateUs" id="ba3">
                  <img src={commerce} alt="" />
                </div>
              </div>
              <div className="rightContent">
                {achievementsRight.map((item, index) => {
                  return (
                    <div className="achievement" key={index}>
                      <h3>{item.name}</h3>
                      <p>{item.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="ready">
          <div className="headTitle">
            <h1>Ready to get started?</h1>
            <p>
              Sign up to explore the slippy app and receive a free custom sample
              pack. We recommend booking a demo to see the platform in action,
              and to learn how some of the worlds most innovative brands are
              using slippy to retain more customers.
            </p>
            <div className="userActions">
              <button className="uniProj uniProj--stripe">
                Get Started <img src={btn} alt="" className="arrow" />
              </button>
              <button className="uniProj uniProj--stripe">
                Sign up
                <img src={btn} alt="" className="arrow" />{" "}
              </button>
            </div>
          </div>
          <div className="thinking">
            <img src={think} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
