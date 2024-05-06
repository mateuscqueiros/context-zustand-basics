import { ReactElement, createContext, useContext, useState } from "react";

const TrucoContext = createContext<any>(null);

const createTrucoContext = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  return {
    teamA,
    teamB,
    scoreA: () => setTeamA((value) => value + 1),
    scoreB: () => setTeamB((value) => value + 1),
  };
};

export const TrucoStoreProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  return (
    <TrucoContext.Provider value={createTrucoContext()}>
      {children}
    </TrucoContext.Provider>
  );
};

export const useTrucoContext = () => useContext(TrucoContext);
