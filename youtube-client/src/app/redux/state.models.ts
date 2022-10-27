export type AdminCardType = {
  title: string;
  description: string;
  imglink: string;
  videolink: string;
  date: string;
};

export type AppState = {
  adminCards: AdminCardType[];
};
