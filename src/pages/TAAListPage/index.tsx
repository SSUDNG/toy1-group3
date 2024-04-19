import React, { useState } from "react";
// import { AttendanceInfo } from "components/TypeDef";
import TAAHeader from "../../components/TAAHeader";
import TAAList from "../../components/TAAList";
import styles from "./TAA.module.css";

interface TAAListPageProps {
  defaultRowsPerPage: number;
}

function TAAListPage({ defaultRowsPerPage }: TAAListPageProps) {
  const [selectedVacationType, setSelectedVacationType] = useState("전체");

  return (
    <div className={styles.form}>
      <TAAHeader
        current={selectedVacationType}
        onSelect={setSelectedVacationType}
      />
      <TAAList
        selectedVacationType={selectedVacationType}
        defaultRowsPerPage={defaultRowsPerPage}
      />
    </div>
  );
}

export default TAAListPage;
