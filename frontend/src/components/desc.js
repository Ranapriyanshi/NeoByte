import React, { useState } from "react";
import monday from "../assets/monday.png";
import shopify from "../assets/shopify.png";
import treelo from "../assets/treelo.webp";
import slack from "../assets/slack.png";
import paypal from "../assets/payPal.png";
import web from "../assets/web.png";
import compiler from "../assets/compiler.png";
import cart from "../assets/cart.png";
import i from "../assets/22.png";
import btn from "../assets/btn.png";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const Desc = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [cardInView, setCardInView] = useState(false);

  const { ref: cardRef } = useInView({
    threshold: 0.2,
    triggerOnce: false,
    onChange: (inView, entry) => {
      const y = entry.boundingClientRect.y;

      if (inView) {
        setCardInView(true);
      } else if (y > 0) {
        setCardInView(false);
      }
    },
  });

  const services = [
    {
      id: "b1",
      image: web,
      title: "Web Design",
      description:
        "We provide you with customised website design that's perfect for your business or personal site.",
      delay: 0.2,
      rotate: -10,
    },
    {
      id: "b2",
      image: compiler,
      title: "Development",
      description:
        "We develop online tools to create unique widget for your business website.",
      delay: 0.4,
      rotate: 0,
    },
    {
      id: "b3",
      image: cart,
      title: "E-Commerce",
      description:
        "We provide assistance to customers with everything from making online purchase decisions to investing.",
      delay: 0.6,
      rotate: 10,
    },
  ];

  return (
    <motion.div className="section">
      <motion.div className="band">
        <img className="logos" src={monday} alt="" />
        <img className="logos" src={shopify} alt="" />
        <img className="logos" src={treelo} alt="" />
        <img className="logos" src={slack} alt="" />
        <img className="logos" src={paypal} alt="" />
      </motion.div>
      <motion.div className="detail">
        <motion.div className="heading" ref={ref}>
          <h1>
            {inView && (
              <Typewriter
                words={["Save your time, managing business with us."]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={2000}
              />
            )}
          </h1>
          <p>
            We help ambitious brands unlock growth through, custom software
            solutions, and scalable technology systems.{" "}
          </p>
        </motion.div>
        <motion.div className="bBox" ref={cardRef}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="box"
              id={service.id}
              initial={{ y: 120, rotate: service.rotate, opacity: 0 }}
              animate={
                cardInView
                  ? { y: 0, rotate: 0, opacity: 1 }
                  : { y: 120, rotate: service.rotate, opacity: 0 }
              }
              transition={{
                delay: service.delay,
                duration: 1.2,
                type: "spring",
              }}
            >
              <img src={service.image} alt="" className="divisions" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="whyme">
        <motion.div className="left">
          <img src={i} alt="" />
        </motion.div>
        <motion.div className="right">
          <h1>Why Us?</h1>
          <motion.div className="title">
            <motion.div>
              <h1 style={{ color: "#141435" }}>5+</h1>
              <h3>
                Years of <br />
                Experience
              </h3>
            </motion.div>
            <p>
              We have over worked over tremendous number of project over years
              and experts of what we do, and know how to bring perfection.
            </p>
          </motion.div>

          <motion.div className="title">
            <motion.div>
              <h1 style={{ color: "#141435" }}>86</h1>
              <h3>
                Happy <br />
                Clients
              </h3>
            </motion.div>
            <p>
              We listern to out goal and complete a free audit to discover if we
              are great fit with each other to built an awesome project.
            </p>
          </motion.div>

          <motion.div className="title">
            <motion.div>
              <h1 style={{ color: "#141435" }}>32+</h1>
              <h3>
                Business <br />
                Partners
              </h3>
            </motion.div>
            <p>
              We help the most exciting brands unlock their growth through
              carefully crafted paid media campaign and digital experiences.
            </p>
          </motion.div>

          <motion.div className="btnDiv">
            <button
              className="startedBtn"
              style={{ backgroundColor: "#fcf6e8" }}
              onClick={handleContact}
            >
              Contact Us <img src={btn} alt="" className="arrow" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Desc;
