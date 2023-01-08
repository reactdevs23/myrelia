import React from "react";
import logo from "../../images/logo.png";
import SingleFaq from "./SingleFaq/SingleFaq";
import styles from "./Faq.module.css";

const Faq = () => {
  const faqData = [
    {
      question: "Why MYRELIA.FR?",
      answer:
        "Join the adventure of TaliaMC a 100% stable PvP/Factions Farm2Win server with a CashPrize of 950€ which is available every month!",
    },
    {
      question: "Why it’s so important to buy and play?",
      answer:
        "Join the adventure of TaliaMC a 100% stable PvP/Factions Farm2Win server with a CashPrize of 950€ which is available every month!",
    },
    {
      question: "How it’s works?",
      answer:
        "Join the adventure of TaliaMC a 100% stable PvP/Factions Farm2Win server with a CashPrize of 950€ which is available every month!",
    },
    {
      question: "How to buy these Players?",
      answer:
        "Join the adventure of TaliaMC a 100% stable PvP/Factions Farm2Win server with a CashPrize of 950€ which is available every month!",
    },
  ];
  return (
    <div className="container">
      <div className={styles.header}>MYRELIA - FAQ</div>
      <div className={styles.wrapper}>
        <img src={logo} alt="#" className={styles.image} />{" "}
        <div className={styles.faqContainer}>
          {faqData.map((el, i) => (
            <SingleFaq {...el} index={i + 1} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
