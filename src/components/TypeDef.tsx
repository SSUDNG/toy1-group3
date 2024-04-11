export type Date = {
  year: number;
  month: number;
  day: number;
};

export type AttandanceInfo = {
  name: string;
  key: number;
  category: string;
  begin: Date;
  end: Date;
};
