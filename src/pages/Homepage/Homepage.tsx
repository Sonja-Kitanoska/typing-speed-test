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
    <div className="bg-black flex-grow-1 d-flex flex-column">
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
