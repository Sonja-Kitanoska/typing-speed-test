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
  getRandomParagraph,
  paragraph,
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
          getRandomParagraph={getRandomParagraph}
        />
      </div>

      <StartTyping paragraph={paragraph} />
    </div>
  );
};

export default Homepage;
