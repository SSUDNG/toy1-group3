import React from "react";
import Container from "@mui/material/Container";
import { AttandanceInfo } from "components/TypeDef";
import TAAHeader from "../../components/TAAHeader";
import TAAList from "../../components/TAAList";

function TAAListPage() {
  const attendanceData: AttandanceInfo[] = [
    {
      name: "SangHwa",
      key: 1,
      category: "vacation",
      begin: { year: 2024, month: 4, day: 9 },
      end: { year: 2024, month: 4, day: 10 },
    },
    {
      name: "MinSoo",
      key: 2,
      category: "vacation",
      begin: { year: 2024, month: 4, day: 11 },
      end: { year: 2024, month: 4, day: 12 },
    },
    {
      name: "Nicola",
      key: 3,
      category: "vacation",
      begin: { year: 2024, month: 4, day: 13 },
      end: { year: 2024, month: 4, day: 14 },
    },
    {
      name: "SeungHeon",
      key: 4,
      category: "vacation",
      begin: { year: 2024, month: 4, day: 13 },
      end: { year: 2024, month: 4, day: 14 },
    },
  ];

  return (
    <Container>
      <TAAHeader />
      <TAAList TAAdata={attendanceData} />
    </Container>
  );
}

export default TAAListPage;
