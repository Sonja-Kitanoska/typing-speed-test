import Navbar from "../../components/Navbar/Navbar";
import { StartTyping } from "../../components/StartTyping/StartTyping";
import TestControls from "../../components/TestControls/TestControls";
import TypingStats from "../../components/TypingStats/TypingStats";
import type { HomepageProps } from "../../types/types";

const Homepage = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
  paragraph,
}: HomepageProps) => {
  return (
    <div className="bg-black min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="d-lg-flex p-2">
        <TypingStats mode={mode} />
        <TestControls
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          mode={mode}
          setMode={setMode}
        />
      </div>

      <StartTyping paragraph={paragraph} />
    </div>
  );
};

export default Homepage;
