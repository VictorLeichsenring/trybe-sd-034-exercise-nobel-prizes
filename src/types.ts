export type NobelPrizeProp = {
  categoryFullName: { en: string },
  dateAwarded: string,
  laureates?: []
};

export type NobelPrizeStates = {
  nobelPrizes: NobelPrizeProp[]
};

export type AppState = {
  nobelPrizes: NobelPrizeProp[];
};

export type LaureateProp = {
  key: number,
  name: string,
  reason: string,
};

export type Laureatetype = {
  id: number;
  motivation: {
    en: string;
  };
  knownName?: {
    en: string;
  };
  orgName?: {
    en: string;
  };
};
