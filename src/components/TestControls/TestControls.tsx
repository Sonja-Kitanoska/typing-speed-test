const TestControls = () => {
  return (
    <>
      <div className="row border-bottom border-secondary py-4 d-lg-none p-2">
        <div className="col-6">
          <select
            className="form-select d-flex fs-6 p-1 bg-dark text-white"
            aria-label="Large select example"
          >
            <option defaultValue={1}>Hard</option>
            <option value="2">Medium</option>
            <option value="3">Easy</option>
          </select>
        </div>
        <div className="col-6">
          <select
            className="form-select fs-6 p-1 bg-dark text-white"
            aria-label="Large select example"
          >
            <option defaultValue={0}>Timed (60s)</option>
            <option value="1">Passage</option>
          </select>
        </div>
      </div>
      <div className="d-none d-lg-flex align-items-center gap-2">
        <p className="text-secondary mb-0">Difficulty:</p>
        <p className="text-white mb-0 border rounded-3 p-1">Easy</p>
        <p className="text-white mb-0 border rounded-3 p-1">Medium</p>
        <p className="text-white mb-0 border rounded-3 p-1">Hard</p>

        <div className="border-secondary mx-1 align-self-stretch"></div>

        <p className="text-secondary mb-0 ">Mode:</p>
        <p className="text-white mb-0 border rounded-3 p-1 ">Timed(60s)</p>
        <p className="text-white mb-0 border rounded-3 p-1">Passage</p>
      </div>
    </>
  );
};

export default TestControls;
