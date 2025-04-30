import React from "react";
import settings from "../assets/settings.png";
import rating from "../assets/rating.png";
import commerce from "../assets/comm.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const ValuePreposition = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
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
    <motion.div className="ellaboration" id="b1">
      <motion.div className="serviceDetail" ref={ref}>
        <h2>Our Results?</h2>
        <h1>
          {inView && (
            <Typewriter
              words={["Delighted costumers and grown businesses"]}
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
          We help the most exciting brands unlock their growth through carefully
          crafted paid media campaign and digital experiences.{" "}
        </p>
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
  );
};

export default ValuePreposition;
