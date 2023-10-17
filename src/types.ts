export type NobelPrizeProp = {
  categoryFullName: { en:string },
  dateAwarded: string,
};

export type NobelPrizeStates = {
  nobelPrizes: NobelPrizeProp[]
};

export type AppState = {
  nobelPrizes: NobelPrizeProp[];
};
