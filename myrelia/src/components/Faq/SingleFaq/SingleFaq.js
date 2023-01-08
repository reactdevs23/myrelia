import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styles from "./SingleFaq.module.css";

const SingleFaq = ({ question, answer, index }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.faq}>
      <div
        className={styles.questionContainer}
        onClick={() => setShow((prev) => !prev)}
      >
        <p className={styles.question}>
          {" "}
          <span>{index}.</span> &nbsp;<span>{question}</span>
        </p>
        {show ? (
          <AiFillCaretUp className={styles.icon} />
        ) : (
          <AiFillCaretDown className={styles.icon} />
        )}
      </div>
      {show && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

export default SingleFaq;
