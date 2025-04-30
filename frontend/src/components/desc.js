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
        setCardInView(true); // Trigger animation on scroll into view
      } else if (y > 0) {
        // If scrolling up and leaving the section (y > 0), reset animation
        setCardInView(false);
      }
      // Else, do nothing (scrolling down past section – keep animation visible)
    },
  });

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
          <motion.div
            className="box"
            id="b1"
            initial={{ y: 120, rotate: -10, opacity: 0 }}
            animate={
              cardInView
                ? { y: 0, rotate: 0, opacity: 1 }
                : { y: 120, rotate: -10, opacity: 0 }
            }
            transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
          >
            <img src={web} alt="" className="divisions" />
            <h2>Web Design</h2>
            <p>
              We provide you with customised website design that's perfect for
              your business or personal site.
            </p>
          </motion.div>

          <motion.div
            className="box"
            id="b2"
            initial={{ y: 120, rotate: 0, opacity: 0 }}
            animate={
              cardInView
                ? { y: 0, rotate: 0, opacity: 1 }
                : { y: 120, rotate: 0, opacity: 0 }
            }
            transition={{ delay: 0.4, duration: 1.2, type: "spring" }}
          >
            <img src={compiler} alt="" className="divisions" />
            <h2>Development</h2>
            <p>
              We develop online tools to create unique widget for your business
              website.
            </p>
          </motion.div>

          <motion.div
            className="box"
            id="b3"
            initial={{ y: 120, rotate: 10, opacity: 0 }}
            animate={
              cardInView
                ? { y: 0, rotate: 0, opacity: 1 }
                : { y: 120, rotate: 10, opacity: 0 }
            }
            transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
          >
            <img src={cart} alt="" className="divisions" />
            <h2>E-Commerce</h2>
            <p>
              We provide assistance to customers with everything from making
              online purchase decisions to investing.
            </p>
          </motion.div>
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
