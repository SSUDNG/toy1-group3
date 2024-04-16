import React, { useState } from "react";
import { AttandanceInfo } from "components/TypeDef";
import TAAHeader from "../../components/TAAHeader";
import TAAList from "../../components/TAAList";
import styles from "./TAA.module.css";

function TAAListPage() {
  const [selectedVacation, setSelectedVacation] = useState<string>("전체");
  const attendanceData: AttandanceInfo[] = [
    {
      name: "김상화",
      key: 1,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김민수",
      key: 2,
      category: "반차",
      begin: { year: 2024, month: 4, day: 11 },
      end: { year: 2024, month: 4, day: 11 },
      comment: "휴가신청합니다~",
    },
    {
      name: "니콜라",
      key: 3,
      category: "병가",
      begin: { year: 2024, month: 4, day: 13 },
      end: { year: 2024, month: 4, day: 14 },
      comment: "휴가신청합니다~",
    },
    {
      name: "이승헌",
      key: 4,
      category: "조퇴",
      begin: { year: 2024, month: 4, day: 13 },
      end: { year: 2024, month: 4, day: 14 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 5,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 6,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 7,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 8,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 9,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 10,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 11,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 12,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 13,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 14,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 15,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 16,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 17,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
    {
      name: "김상화",
      key: 18,
      category: "연차",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
      comment: "휴가신청합니다~",
    },
  ];
  const selectedData =
    selectedVacation !== "전체"
      ? attendanceData.filter((info) => info.category === selectedVacation)
      : attendanceData;

  return (
    <form className={styles.form}>
      <TAAHeader current={selectedVacation} onSelect={setSelectedVacation} />
      <TAAList TAAdata={selectedData} />
    </form>
  );
}

export default TAAListPage;
