import Navbar from "../../components/Navbar/Navbar";
import { StartTyping } from "../../components/StartTyping/StartTyping";
import TestControls from "../../components/TestControls/TestControls";
import TypingStats from "../../components/TypingStats/TypingStats";

type HomepageProps = {
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

const Homepage = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
}: HomepageProps) => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="d-lg-flex p-2">
        <TypingStats />
        <TestControls
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          mode={mode}
          setMode={setMode}
        />
      </div>
      <StartTyping />
    </div>
  );
};

export default Homepage;
