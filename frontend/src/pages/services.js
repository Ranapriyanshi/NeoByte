import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
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

const Services = () => {
  const navigate = useNavigate();
  const handleDemo = () => {
    navigate("/demo");
  };
  const handleLogin = () =>{
    navigate("/login")
  }
  const handleSignUp = () =>{
    navigate("/signup")
  }
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
    <motion.div>
      <Navbar />
      <motion.div className="services">
        <motion.div className="servicesSection">
          <motion.div className="head">
            <motion.div className="tagLine">
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
              <motion.div className="demo">
                <button
                  className="uniProj uniProj--stripe"
                  onClick={handleDemo}
                >
                  Book demo <img src={btn} alt="" className="arrow" />
                </button>
              </motion.div>
            </motion.div>
            <motion.div className="demoImg">
              <img src={sit} alt="" />
            </motion.div>
          </motion.div>
          <motion.div className="childContain">
            {child.map((item, index) => {
              return (
                <motion.div className="child" id={item.name} key={index}>
                  <img
                    src={item.imageName}
                    className="divisions pebble"
                    alt=""
                  />
                  <p>{item.content2}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div className="ellaboration">
            <motion.div className="detail serviceDetail">
              <motion.div
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
              </motion.div>
            </motion.div>
            <motion.div className="horizontal">
              <motion.div className="leftContent">
                {achievementsLeft.map((item, index) => {
                  return (
                    <motion.div className="achievement" key={index}>
                      <h3>{item.name}</h3>
                      <p>{item.content}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
              <motion.div className="bubbles">
                <motion.div className="us alternateUs" id="ba1">
                  <img src={settings} alt="" />
                </motion.div>
                <motion.div className="us alternateUs" id="ba2">
                  <img src={rating} alt="" />
                </motion.div>
                <motion.div className="us alternateUs" id="ba3">
                  <img src={commerce} alt="" />
                </motion.div>
              </motion.div>
              <motion.div className="rightContent">
                {achievementsRight.map((item, index) => {
                  return (
                    <motion.div className="achievement" key={index}>
                      <h3>{item.name}</h3>
                      <p>{item.content}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="ready">
          <motion.div className="headTitle">
            <h1>Ready to get started?</h1>
            <p>
              Sign up to explore the NeoByte and receive a free custom sample
              pack. We recommend booking a demo to see the platform in action,
              and to learn how some of the worlds most innovative brands are
              using NeoByte to retain more customers.
            </p>
            <motion.div className="userActions">
              <button className="uniProj uniProj--stripe" onClick={handleLogin}>
                Get Started <img src={btn} alt="" className="arrow" />
              </button>
              <button className="uniProj uniProj--stripe" onClick={handleSignUp}>
                Sign up
                <img src={btn} alt="" className="arrow" />{" "}
              </button>
            </motion.div>
          </motion.div>
          <motion.div className="thinking">
            <img src={think} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Services;
