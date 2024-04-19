import React from "react";
import Clock from "components/Clock";
import TAAListPage from "pages/TAAListPage";
import News from "pages/NewsPage/News";
import styles from "./Main.module.css";

function MainPage() {
  const defaultRowsPerPage = 3;
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <div className={styles.profileCard}>Profile</div>
        <Clock />
      </section>
      <section className={styles.middle}>
        <TAAListPage defaultRowsPerPage={defaultRowsPerPage} />
      </section>
      <section className={styles.bottom}>
        <News isMain />
      </section>
    </div>
  );
}

export default MainPage;
