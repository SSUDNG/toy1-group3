import React, { useState } from "react";
import styled from "styled-components";
import "../global.css";

const Container = styled.div`
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LabelText = styled.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  color: #818181;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  color: #818181;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  max-width: 100px;
  width: 100%;
  padding: 8px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 14px;
`;

const Request: React.FunctionComponent = function Request() {
  const [vacationType, setVacationType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const handleVacationTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setVacationType(event.target.value);
  };
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };
  const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReason(event.target.value);
  };
  const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("근태신청 완료:", {
      vacationType,
      startDate,
      endDate,
      reason,
      notes,
    });
  };

  return (
    <Container>
      <Title>근태신청</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={vacationType}>
          <LabelText>휴가 종류</LabelText>
          <Select value={vacationType} onChange={handleVacationTypeChange}>
            <option value="">선택하세요</option>
            <option value="연차">연차</option>
            <option value="반차">반차</option>
            <option value="병가">병가</option>
            <option value="조퇴">조퇴</option>
            <option value="기타">기타</option>
          </Select>
        </Label>
        <DateContainer>
          <Label htmlFor={startDate}>
            <LabelText>시작일</LabelText>
            <Input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </Label>
          <Label htmlFor={endDate}>
            <LabelText>종료일</LabelText>
            <Input type="date" value={endDate} onChange={handleEndDateChange} />
          </Label>
        </DateContainer>
        <Label htmlFor={reason}>
          <LabelText>사유</LabelText>
          <Select value={reason} onChange={handleReasonChange}>
            <option value="">선택하세요</option>
            <option value="휴가">휴가</option>
            <option value="병원방문">병원방문</option>
            <option value="개인사유">개인사유</option>
            <option value="비상">비상</option>
            <option value="기타">기타</option>
          </Select>
        </Label>
        <Label htmlFor={notes}>
          <LabelText>메모</LabelText>
          <Input type="text" value={notes} onChange={handleNotesChange} />
        </Label>
        <ButtonContainer>
          <Button type="submit">신청하기</Button>
          <Button type="button">취소하기</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Request;
