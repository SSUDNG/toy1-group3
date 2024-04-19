import React, { useEffect, useState } from "react";
// import { AttendanceInfo } from "components/TypeDef";
import { useVacations } from "contexts/VacationContext";
import TAAHeader from "../../components/TAAHeader";
import TAAList from "../../components/TAAList";
import styles from "./TAA.module.css";

function TAAListPage() {
  const { vacations } = useVacations();
  const [selectedVacationType, setSelectedVacationType] = useState("전체");

  useEffect(() => {
    // 선택된 휴가 유형을 기본값으로 변경
    setSelectedVacationType("전체");
  }, [vacations]); // vacations 상태가 변경될 때만 실행

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
