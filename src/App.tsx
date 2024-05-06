import "./App.css";
import { useTrucoContext } from "./context/truco";
import { useTrucoStore } from "./stores/truco";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ScoreBoard />
      <div className="flex flex-col border-2 border-slate-950 p-4 gap-5">
        <h2 className="text-2xl">Times</h2>
        <div className="flex flex-row gap-4">
          <TeamA />
          <TeamB />
        </div>
      </div>
    </div>
  );
}

const ScoreBoard = () => {
  const { teamA, teamB } = useTrucoContext();
  // const teamA = useTrucoStore((state) => state.teamA);
  // const teamB = useTrucoStore((state) => state.teamB);
  return (
    <div className="w-[200px] h-[200px] flex items-center justify-center border-2 border-slate-950 p-2">
      <h1 className="text-2xl">
        {teamA === teamB ? "Empate" : teamA > teamB ? "Time A" : "Time B"}
      </h1>
    </div>
  );
};

const TeamA = () => {
  const { teamB: team, scoreB: score } = useTrucoContext();
  // const team = useTrucoStore((state) => state.teamA);
  // const score = useTrucoStore((state) => state.scoreA);
  return <Team title="Time A" team={team} score={score} />;
};

const TeamB = () => {
  const { teamA: team, scoreA: score } = useTrucoContext();
  // const team = useTrucoStore((state) => state.teamB);
  // const score = useTrucoStore((state) => state.scoreB);
  return <Team title="Time A" team={team} score={score} />;
};

const Team = ({ title, team, score }: any) => {
  return (
    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center border-2 border-slate-950 p-4">
      <h3 className="flex flex-col">
        {title}: <span className="text-3xl">{team}</span>
      </h3>
      <button onClick={score}>Incrementar</button>
    </div>
  );
};

export default App;
