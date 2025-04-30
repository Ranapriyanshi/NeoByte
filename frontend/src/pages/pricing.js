import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import btn from "../assets/btn.png";

import think from "../assets/222222.png";
import { motion } from "framer-motion";

const Project = () => {
  const navigate = useNavigate();
  const handleDemo = () => {
    navigate("/demo");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const [className, setclassName] = useState("");
  const [ques, setQues] = useState("");
  const changeId = (e) => {
    setclassName(e);
  };
  const showAnswer = (e) => {
    ques ? setQues("") : setQues(e);
  };
  const prices = [
    {
      styleColor: "b1",
      title: "Basic ",
      description: "Perfect for early-stage businesses ready to go digital.",
      availableOptions: [
        {
          id: 1,
          feature: "Website template setup",
        },
        {
          id: 2,
          feature: "Partial access granted",
        },
        {
          id: 3,
          feature: "1 integration source",
        },
      ],
    },
    {
      styleColor: "b2",
      title: "Merchant ",
      description:
        "Ideal for growing brands that need a fully integrated solution.",
      availableOptions: [
        {
          id: 1,
          feature: "Complete website creation",
        },
        {
          id: 2,
          feature: "Backend Integration",
        },
        {
          id: 3,
          feature: "1 integration source",
        },
      ],
    },
    {
      styleColor: "b3",
      title: "Premium",
      description:
        "For businesses ready to scale aggressively with full feature access.",
      availableOptions: [
        {
          id: 1,
          feature: "Website template+ Custom Features",
        },
        {
          id: 2,
          feature: "Full Dashboard Access",
        },
        {
          id: 3,
          feature: "1 integration source",
        },
      ],
    },
  ];
  const question = [
    {
      question: "What is the difference between the plans?",
      answwer:
        "The difference between the plans is the features and the price. The basic plan is for small businesses, the merchant plan is for medium businesses and the premium plan is for large businesses. The features of the plans are different and the price is also different. The basic plan is the cheapest and the premium plan is the most expensive.",
    },
    {
      question: "Do you need to have a tech team of your own?",
      answwer:
        "No, we can absolutely create a platform from scratch for you. We have a team of developers who can create a platform for you. We can also integrate the platform with your existing systems. We can also provide you with a platform that you can manage yourself. We can also provide you with a platform that you can manage yourself.",
    },
    {
      question: "Can we have a custom plan?",
      answwer:
        "Yes, we can create a custom plan for you. We can create a plan that is tailored to your needs. We can create a plan that is tailored to your budget.",
    },
    {
      question: "Can we have someone manage the platform for us?",
      answwer:
        "Yes, we can manage the platform for you. We have a team of developers who can manage the platform for you. We can also provide you with a platform that you can manage yourself. We can also provide you with a platform that you can manage yourself.",
    },
  ];
  return (
    <motion.div>
      <Navbar />
      <motion.div className="prices">
        <motion.div className="introPrice">
          <h1>Powerful personalisation, flexible pricing</h1>
          <p>
            We offer flexible plans that are suitable for businesses of all
            sizes. Please speak to the team about your requirements, and we'd be
            delighted to provide a custom quote.
          </p>
          <motion.div
            style={{ display: "flex", alignItems: "center", width: "15%" }}
          >
            <button className="uniProj uniProj--stripe" onClick={handleDemo}>
              Speak to Sales
            </button>
          </motion.div>
        </motion.div>
        <motion.div className="response" style={{ padding: "50px 120px" }}>
          <motion.div
            className="details selection selected"
            style={{ width: "90%", gap: "50px" }}
          >
            {prices.map((item, index) => (
              <motion.div
                key={index}
                className={
                  item.styleColor === className
                    ? "detail_parent "
                    : "detail_parent "
                }
                id={item.styleColor}
                style={{
                  width: "80%",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  padding: "50px 25px",
                  textAlign: "left",
                  height: "auto",
                  transition: "none",
                }}
                onClick={handleContact}
              >
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <ul style={{ listStyle: "none" }}>
                  {item.availableOptions.map((item2, index2) => (
                    <li
                      key={index2}
                      style={{
                        padding: "8px 0px",
                        fontSize: "1.1rem",
                        color: "#6f6969",
                      }}
                    >
                      ✔️ {item2.feature}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#6f6969",
                  }}
                >
                  Click to contact sales
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="questionSection">
          <motion.div className="faqs">
            <motion.div className="faqsTitle">
              <p style={{ fontSize: "1.2rem" }}>In case we missed something</p>
              <h1>Frequently Asked Questions</h1>
            </motion.div>
            <motion.div className="questsSet">
              {question.map((item, index) => {
                return (
                  <motion.div className="quest" key={index}>
                    <motion.div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>{item.question}</p>
                      <img
                        src={btn}
                        alt=""
                        id={item.question === ques ? "show" : "hide"}
                        className="arrow"
                        onClick={() => {
                          showAnswer(item.question);
                        }}
                      />
                    </motion.div>
                    <p
                      className={item.question === ques ? "show" : "hide"}
                      style={{ color: "#6f6969" }}
                    >
                      {item.answwer}
                    </p>
                  </motion.div>
                );
              })}
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

export default Project;
