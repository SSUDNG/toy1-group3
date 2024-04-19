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
