import Navbar from "../../components/Navbar/Navbar";
import TestControls from "../../components/TestControls/TestControls";
import TypingStats from "../../components/TypingStats/TypingStats";
import type { TypingTestProps } from "../../types/types";

const TypingTest = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
  handleStart,
  paragraph,
}: TypingTestProps) => {
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
          handleStart={handleStart}
        />
      </div>

      <div className="container flex-grow-1 d-flex flex-column">
        <div>
          <p className="text-white py-3 fs-3">{paragraph?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
