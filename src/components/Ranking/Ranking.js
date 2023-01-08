import React, { useState } from "react";
import styles from "./Ranking.module.css";
const Ranking = () => {
  const [value, setValue] = useState(0);
  const buttons = ["Faction pvp", " Faction farm", "Vote", "Monnaie"];

  const tableData = [
    [
      { coins: 5000, activeEcoins: true, lastName: "Ginolac", voting: 42 },
      { coins: 3000, activeEcoins: true, lastName: "Zeldeck", voting: 40 },
      { coins: 2000, activeEcoins: true, lastName: "Sikyonn", voting: 40 },
      { coins: 2000, ecoins: true, lastName: "Deadshoot7277", voting: 35 },
      { coins: 1000, ecoins: true, lastName: "smallfoot1006", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Gragonfire242002", voting: 32 },
      { coins: 50000, currency: "$", lastName: "PatStA64", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Jerikokill", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Corasam3154", voting: 31 },
      { coins: 50000, currency: "$", lastName: "Hugosta", voting: 31 },
    ],
    [
      { coins: 2000, ecoins: true, lastName: "Deadshoot7277", voting: 35 },
      { coins: 1000, ecoins: true, lastName: "smallfoot1006", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Gragonfire242002", voting: 32 },
      { coins: 50000, currency: "$", lastName: "PatStA64", voting: 32 },
      { coins: 5000, activeEcoins: true, lastName: "Ginolac", voting: 42 },
      { coins: 3000, activeEcoins: true, lastName: "Zeldeck", voting: 40 },
      { coins: 2000, activeEcoins: true, lastName: "Sikyonn", voting: 40 },

      { coins: 50000, currency: "$", lastName: "Jerikokill", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Corasam3154", voting: 31 },
      { coins: 50000, currency: "$", lastName: "Hugosta", voting: 31 },
    ],
    [
      { coins: 5000, activeEcoins: true, lastName: "Ginolac", voting: 42 },
      { coins: 3000, activeEcoins: true, lastName: "Zeldeck", voting: 40 },
      { coins: 2000, activeEcoins: true, lastName: "Sikyonn", voting: 40 },

      { coins: 50000, currency: "$", lastName: "Jerikokill", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Corasam3154", voting: 31 },
      { coins: 50000, currency: "$", lastName: "Hugosta", voting: 31 },
      { coins: 2000, ecoins: true, lastName: "Deadshoot7277", voting: 35 },
      { coins: 1000, ecoins: true, lastName: "smallfoot1006", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Gragonfire242002", voting: 32 },
      { coins: 50000, currency: "$", lastName: "PatStA64", voting: 32 },
    ],
    [
      { coins: 2000, ecoins: true, lastName: "Deadshoot7277", voting: 35 },
      { coins: 1000, ecoins: true, lastName: "smallfoot1006", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Gragonfire242002", voting: 32 },
      { coins: 50000, currency: "$", lastName: "PatStA64", voting: 32 },
      { coins: 3000, activeEcoins: true, lastName: "Zeldeck", voting: 40 },
      { coins: 2000, activeEcoins: true, lastName: "Sikyonn", voting: 40 },

      { coins: 50000, currency: "$", lastName: "Jerikokill", voting: 32 },
      { coins: 50000, currency: "$", lastName: "Corasam3154", voting: 31 },
      { coins: 5000, activeEcoins: true, lastName: "Ginolac", voting: 42 },

      { coins: 50000, currency: "$", lastName: "Hugosta", voting: 31 },
    ],
  ];

  return (
    <section className={`${styles.rankingWrapper} container`}>
      <div className={styles.ranking}>
        <span className={styles.heading}>Ranking</span>
        <div className={styles.itemContainer}>
          {buttons.map((el, i) => (
            <button key={i} className={styles.item} onClick={() => setValue(i)}>
              {el}
            </button>
          ))}
          {/* <p className={styles.item}>
            Faction pvp <span className={styles.line}>|</span> Faction farm{" "}
          </p>
          <p className={styles.item}>
            <span className={`${styles.line} ${styles.line2}`}>|</span> Vote{" "}
            <span className={styles.line}>|</span> Monnaie
          </p> */}
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.row}>
          <p className={styles.text}>
            <span className={styles.id}>#</span> REWARDS
          </p>
          <p className={styles.text}>Last name</p>
          <p className={styles.text}>Voting</p>
        </div>
        {tableData[value].map((el, i) => (
          <div className={styles.row}>
            <div className={styles.textContainer}>
              <span className={`${styles.id} ${styles.text}`}>{i + 1} </span>
              <p
                className={`${styles.text} ${
                  el.activeEcoins && styles.activeEcoin
                }`}
              >
                <span>
                  {el.currency && el.currency}
                  {el.currency ? el.coins.toLocaleString("en-us") : el.coins}
                </span>{" "}
                &nbsp;
                <span className={styles.ecoin}>
                  {el.activeEcoins && "Ecoins"}
                </span>
                <span className={styles.ecoin}>{el.ecoins && "Ecoins"}</span>
              </p>
            </div>
            <p className={styles.text}>{el.lastName}</p>
            <p className={styles.text}>{el.voting}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ranking;
