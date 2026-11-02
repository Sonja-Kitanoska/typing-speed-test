import type { Difficulty, TestcontrolsProps } from "../../types/types";

const TestControls = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
}: TestcontrolsProps) => {
  const difficulties: { label: string; value: Difficulty }[] = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];
  const modes = ["Timed(60s)", "Passage"];

  return (
    <>
      {/* MOBILE VERSION */}
      <div className="row border-bottom border-secondary py-4 d-lg-none p-2">
        <div className="col-6">
          <select
            className="form-select d-flex fs-6 p-1 bg-dark text-white"
            aria-label="Large select example"
            defaultValue={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          >
            {difficulties.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6">
          <select
            className="form-select fs-6 p-1 bg-dark text-white"
            aria-label="Large select example"
            onChange={(e) => setMode(e.target.value)}
          >
            {modes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="d-none d-lg-flex align-items-center gap-2">
        <p className="text-secondary mb-0">Difficulty:</p>
        {difficulties.map((item) => (
          <button
            key={item.value}
            onClick={() => setDifficulty(item.value)}
            className={`btn  ${
              difficulty === item.value
                ? "border-primary text-primary"
                : "border-secondary text-white"
            }`}
          >
            {item.label}
          </button>
        ))}

        <div className="border-secondary mx-1 align-self-stretch"></div>

        <p className="text-secondary mb-0 ">Mode:</p>

        {modes.map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={`btn  ${
              mode === item
                ? "border-primary text-primary"
                : "border-secondary text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default TestControls;
