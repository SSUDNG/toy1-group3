import React, { useState } from "react";
// import { AttendanceInfo } from "components/TypeDef";
import TAAHeader from "../../components/TAAHeader";
import TAAList from "../../components/TAAList";
import styles from "./TAA.module.css";

function TAAListPage() {
  const [selectedVacationType, setSelectedVacationType] = useState("전체");

  return (
    <div className={styles.form}>
      <TAAHeader
        current={selectedVacationType}
        onSelect={setSelectedVacationType}
      />
      <TAAList selectedVacationType={selectedVacationType} />
    </div>
  );
}

export default TAAListPage;
