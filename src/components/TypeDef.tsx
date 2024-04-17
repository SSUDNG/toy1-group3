export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface AttandanceInfo {
  name: string;
  key: number;
  category: string;
  begin: Date;
  end: Date;
  comment: string;
};

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