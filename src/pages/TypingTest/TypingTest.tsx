import Navbar from "../../components/Navbar/Navbar";
import TestControls from "../../components/TestControls/TestControls";
import TypingStats from "../../components/TypingStats/TypingStats";
import type { TypingTestProps } from "../../types/types";

const TypingTest = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
  paragraph,
}: TypingTestProps) => {
  return (
    <div className="bg-black min-vh-100 d-flex flex-column">
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

      <div className="container flex-grow-1 d-flex flex-column">
        <div className="border-bottom border-secondary overflow-auto">
          <p className="py-3 fs-3 text-secondary" style={{ height: "50vh" }}>
            {paragraph?.text}
          </p>
        </div>
        <div className="p-3 d-flex justify-content-center">
          <button className="btn btn-dark d-flex gap-1">
            <span>Restart Test</span>
            <img
              src="../../../assets/images/icon-restart.svg"
              alt="Restart icon"
              style={{ width: "17px", height: "auto" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
