import React from "react";
import Clock from "components/Clock";
import TAAListPage from "pages/TAAListPage";
import News from "pages/NewsPage/News";
import ProfileWorkTime from "components/ProfileWorkTime";
import ProfileInfo from "components/ProfileInfo";
import styles from "./Main.module.css";

function MainPage() {
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <div className={styles.profileCard}>
          <ProfileInfo path="main" />
          <ProfileWorkTime />
        </div>
        <Clock />
      </section>
      <section className={styles.middle}>
        <TAAListPage />
      </section>
      <section className={styles.bottom}>
        <News isMain />
      </section>
    </div>
  );
}

export default MainPage;
