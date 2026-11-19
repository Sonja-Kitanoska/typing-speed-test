import { useNavigate } from "react-router-dom";
import Result from "../../components/Result/Result";
import restartIcon from "/assets/images/icon-restart.svg";

const Highscore = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex-grow-1">
      <div className="d-flex flex-column justify-content-center align-items-center pt-2 container">
        <div
          className="my-4"
          style={{
            width: 50,
            height: 50,
          }}
        >
          <img
            src="../../assets/images/icon-new-pb.svg"
            alt="Checked"
            className="w-100 h-100"
          />
        </div>
        <h2 className="text-white text-center">High Score Smashed!</h2>
        <p className="text-secondary text-center">
          You are getting faster. That was incredible typing.
        </p>
        <Result />
        <div>
          <button
            className="btn btn-light mb-0 d-inline-flex align-items-center gap-1"
            onClick={() => navigate("/typing-test")}
          >
            {" "}
            Beat this score{" "}
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
      <div className="position-absolute bottom-0 start-0">
        <img
          src="../../assets/images/pattern-confetti.svg"
          alt="Checked"
          className="w-100 h-100"
        />
      </div>
    </div>
  );
};

export default Highscore;
