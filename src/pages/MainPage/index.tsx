import React from "react";
import Clock from "components/Clock";
import TAAList from "components/TAAList";
import styles from "./Main.module.css";

function MainPage() {
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <div className={styles.profileCard}>dd</div>
        <Clock />
      </section>
      <section className={styles.middle}>
        <TAAList TAAdata={[]} />
      </section>
    </div>
  );
}

export default MainPage;
