export interface DefaultProfile {
  name: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
  position: string;
}

export type ProfileData = {
  email: string;
  name: string;
  phoneNumber: string;
  photoURL: string;
  position: string;
};

export interface RequestData {
  email: string;
  name: string;
  vacationType: string;
  startDate: string | null;
  endDate: string | null;
  reason: string;
  notes: string;
}
