import type { TypingStatsProps } from "../../types/types";

const TypingStats = ({
  mode,
  time = mode === "Timed(60s)" ? 60 : 0,
}: TypingStatsProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedTime =
    mode === "Timed(60s)"
      ? `0:${time?.toString().padStart(2, "0")}`
      : `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="container d-lg-flex justify-content-between text-center">
      <div className="d-flex row pt-4 pt-md-0 text-center">
        <div className="col-4 col-lg-auto border-end border-secondary d-lg-flex align-items-center p-2">
          <p className="text-secondary mb-0">WPM:</p>
          <p className="text-white mb-0">0</p>
        </div>
        <div className="col-4 col-lg-auto border-end border-secondary d-lg-flex align-items-center gap-1 gap-md-0 p-2">
          <p className="text-secondary mb-0">Accuracy:</p>
          <p className="text-white mb-0">100 %</p>
        </div>
        <div className="col-4 col-lg-auto d-lg-flex align-items-center p-2">
          <p className="text-secondary mb-0">Time:</p>
          <p className="text-white mb-0">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default TypingStats;
