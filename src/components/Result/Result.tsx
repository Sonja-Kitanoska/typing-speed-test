import { useNavigate } from "react-router-dom";
import { getLastResult } from "../../utils/storage";

const Result = () => {
  const navigate = useNavigate();
  const lastResult = getLastResult();
  return (
    <div className="d-md-flex gap-2 col-12 justify-content-center">
      <div className="border border-secondary py-1 px-2 col-md-3 mb-3 rounded-3">
        <p className="mb-0 text-secondary">WPM:</p>
        <p className="mb-0 text-white">{lastResult?.wpm}</p>
      </div>
      <div className="border border-secondary py-1 px-2 mb-3 col-md-3 rounded-3">
        <p className="mb-0 text-secondary">Accuracy:</p>
        <p className="text-danger mb-0">{lastResult?.accuracy}%</p>
      </div>
      <div className="border border-secondary py-1 px-2 mb-3 col-md-3 rounded-3">
        <p className="mb-0 text-secondary">Characters:</p>
        <p className="mb-0">
          <span className="text-success">{lastResult?.correctCharacters}</span>
          <span className="text-secondary"> / </span>
          <span className="text-danger">{lastResult?.incorrectCharacters}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
