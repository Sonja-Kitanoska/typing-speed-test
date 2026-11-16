import { useNavigate } from "react-router-dom";
import { getLastResult } from "../../utils/storage";
import Navbar from "../../components/Navbar/Navbar";

const BaselineCompleted = () => {
  const navigate = useNavigate();
  const lastResult = getLastResult();

  return (
    <div className="bg-black vh-100">
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center mt-2 container">
        <div>
          <img src="" alt="" />
        </div>
        <h2 className="text-white text-center">Baseline Established</h2>
        <p className="text-secondary text-center">
          You've set the bar. Now the real challenge begins-time to beat it.
        </p>
        <div className="d-md-flex gap-2 w-100 w-md-50 justify-content-center">
          <div className="border border-secondary py-1 px-2 w-md-25 mb-3">
            <p className="mb-0 text-secondary">WPM:</p>
            <p className="mb-0 text-white">{lastResult?.wpm}</p>
          </div>
          <div className="border border-secondary py-1 px-2 w-md-25 mb-3">
            <p className="mb-0 text-secondary">Accuracy:</p>
            <p className="text-danger mb-0">{lastResult?.accuracy}%</p>
          </div>
          <div className="border border-secondary py-1 px-2 w-md-25 mb-3">
            <p className="mb-0 text-secondary">Characters:</p>
            <p className="mb-0">
              <span className="text-success">
                {lastResult?.correctCharacters}
              </span>
              /
              <span className="text-danger">
                {lastResult?.incorrectCharacters}
              </span>
            </p>
          </div>
        </div>
        <div>
          <button
            className="btn btn-light"
            onClick={() => navigate("/typing-test")}
          >
            {" "}
            Beat this Score{" "}
            <span style={{ fill: "black" }}>
              <img src="../../assets/images/icon-restart.svg" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaselineCompleted;
