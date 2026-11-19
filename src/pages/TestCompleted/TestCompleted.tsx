import { useNavigate } from "react-router-dom";
import Result from "../../components/Result/Result";
import restartIcon from "/assets/images/icon-restart.svg";

const TestCompleted = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black flex-grow-1">
      <div className="d-flex flex-column justify-content-center align-items-center pt-5 container gap-3">
        <div
          className="my-4"
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            boxShadow: "0 0 0 12px #1f5c36, 0 0 0 24px #143d24",
          }}
        >
          <img
            src="../../assets/images/icon-completed.svg"
            alt="Checked"
            className="w-100 h-100"
          />
        </div>
        <h2 className="text-white text-center">Test Complete</h2>
        <p className="text-secondary text-center">
          Solid run. Keep pushing to beat your high score.
        </p>
        <Result />
        <div>
          <button
            className="btn btn-light mb-0 d-inline-flex align-items-center gap-1"
            onClick={() => navigate("/typing-test")}
          >
            {" "}
            Go again{" "}
            <div>
              <img
                src={restartIcon}
                alt="restart icon"
                style={{ filter: "brightness(0)", width: 15, height: 15 }}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCompleted;
