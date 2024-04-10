import React from "react";
import styled from "styled-components";

const TAAListPage = styled.div`
  position: absolute;
  width: 95%;
  height: 500px;
  border-radius: 8px;
  margin: 16px auto;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const Container = styled.div`
  position: relative;
  margin: 16px;
`;
const Title = styled.h1`
  margin: 0;
`;
const Description = styled.h3`
  margin: 0;
`;
const Button = styled.button`
  position: absolute;
  top: 42px;
  right: 0px;
`;
const ListView = styled.div`
  display: flex;
  justify-content: space-around;
`;
export default function TAAList() {
  type Date = {
    year: number;
    month: number;
    day: number;
  };

  type AttandanceInfo = {
    name: string;
    key: number;
    category: string;
    begin: Date;
    end: Date;
  };

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

  attendanceData.map((attendance) => console.log(attendance));

  return (
    <TAAListPage>
      <Container>
        <Title>근태신청</Title>
        <Description>근태신청해주세요</Description>
        <Button type="button">근태신청</Button>
      </Container>
      <Container>
        {attendanceData.map((obj: AttandanceInfo) => (
          <ListView key={obj.key}>
            <span>{obj.name}</span>
            <span>{obj.category}</span>
            <span>
              {obj.begin.year}-{obj.begin.month}-{obj.begin.day}
            </span>
            <span>
              {obj.end.year}-{obj.end.month}-{obj.end.day}
            </span>
          </ListView>
        ))}
      </Container>
    </TAAListPage>
  );
}
