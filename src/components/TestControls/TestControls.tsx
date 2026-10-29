type HomepageProps = {
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

const TestControls = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
}: HomepageProps) => {
  const difficulties = ["Easy", "Medium", "Hard"];
  const modes = ["Timed(60s)", "Passage"];

  return (
    <>
      {/* MOBILE VERSION */}
      <div className="row border-bottom border-secondary py-4 d-lg-none p-2">
        <div className="col-6">
          <select
            className="form-select d-flex fs-6 p-1 bg-dark text-white"
            aria-label="Large select example"
            defaultValue={"Easy"}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item}
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
            key={item}
            onClick={() => setDifficulty(item)}
            className={`btn  ${
              difficulty === item
                ? "border-primary text-primary"
                : "border-secondary text-white"
            }`}
          >
            {item}
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
