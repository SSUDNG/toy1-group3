export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface AttendanceInfo {
  name: string;
  key: number;
  category: string;
  begin: Date;
  end: Date;
  comment: string;
}

export interface DefaultProfile {
  name: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
}

// export interface ProfileData extends DefaultProfile {
//   phoneNumber: string;
//   position: string;
//   startTime: string | null;
//   endTime: string | null;
//   working: boolean;
// }

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

export interface RequestData {
  vacationType: string;
  startDate: string | null;
  endDate: string | null;
  reason: string;
  notes: string;
}
