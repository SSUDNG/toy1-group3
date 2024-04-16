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
}
