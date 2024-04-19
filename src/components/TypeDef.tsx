export interface DefaultProfile {
  name: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
  position: string;
}

export type ProfileData = {
  name: string;
  phoneNumber: string;
  email: string;
  position: string;
  startTime: string | null;
  endTime: string | null;
  photoURL: string;
  working: boolean;
};

// VacationContext의 Vacation 인터페이스 확인해보세요! 동일합니다! :)
export interface RequestData {
  email: string;
  name: string;
  vacationType: string;
  startDate: string | null;
  endDate: string | null;
  reason: string;
  notes: string;
}
