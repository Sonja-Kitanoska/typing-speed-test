import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TestControls from "../../components/TestControls/TestControls";
import TypingStats from "../../components/TypingStats/TypingStats";
import type { TypingTestProps } from "../../types/types";
import {
  getPersonalBest,
  saveLastResult,
  setPersonalBest,
} from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const TypingTest = ({
  difficulty,
  setDifficulty,
  mode,
  setMode,
  paragraph,
  getRandomParagraph,
}: TypingTestProps) => {
  const [userInput, setUserInput] = useState("");
  const [time, setTime] = useState(mode === "Timed(60s)" ? 60 : 0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();

    const handleClick = () => {
      inputRef.current?.focus();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Timer
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (mode === "Timed(60s)") {
          if (prevTime <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }

          return prevTime - 1;
        }

        return prevTime + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const restartTest = () => {
    setIsRunning(false);
    setIsFinished(false);
    setTime(mode === "Timed(60s)" ? 60 : 0);
    getRandomParagraph(difficulty);
    setUserInput("");
  };

  // Original paragraph
  const targetText = paragraph?.text ?? "";

  // Correct characters
  const correctCharacters = userInput
    .split("")
    .filter((char, index) => char === targetText[index]).length;

  const incorrectCharacters = userInput
    .split("")
    .filter((char, index) => char !== targetText[index]).length;

  // Total characters typed
  const totalCharacters = userInput.length;

  // Accuracy
  const accuracy =
    totalCharacters > 0
      ? Math.round((correctCharacters / totalCharacters) * 100)
      : 100;

  // Elapsed time
  const elapsedTime = mode === "Timed(60s)" ? 60 - time : time;

  // WPM
  const wpm =
    elapsedTime > 0
      ? Math.round(correctCharacters / 5 / (elapsedTime / 60))
      : 0;

  useEffect(() => {
    if (!isFinished) return;

    const previousBest = getPersonalBest();

    saveLastResult({
      wpm,
      accuracy,
      correctCharacters,
      incorrectCharacters,
      previousBest,
      date: new Date().toISOString(),
    });

    if (previousBest === null) {
      setPersonalBest(wpm);
      navigate("/baseline-completed");
    } else if (wpm > previousBest) {
      setPersonalBest(wpm);
      navigate("/high-score");
    } else {
      navigate("/test-completed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished]);

  return (
    <div className="bg-black min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="d-lg-flex p-2">
        <TypingStats
          mode={mode}
          time={time}
          wpm={wpm}
          accuracy={accuracy}
          correctCharacters={correctCharacters}
        />
        <TestControls
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          mode={mode}
          setMode={setMode}
          disabled={true}
        />
      </div>

      <div className="container flex-grow-1 d-flex flex-column">
        <div className="border-bottom border-secondary overflow-auto">
          <p className="py-3 fs-3 text-secondary" style={{ height: "50vh" }}>
            {paragraph?.text.split("").map((char, index) => {
              let color = "text-secondary";
              let textDecoration = "none";

              if (index < userInput.length) {
                if (userInput[index] === char) {
                  color = "text-success";
                } else {
                  color = "text-danger";
                  textDecoration = "underline";
                }
              }

              return (
                <span key={index} className={color} style={{ textDecoration }}>
                  {char}
                </span>
              );
            })}
          </p>
          <input
            type="text"
            value={userInput}
            maxLength={paragraph?.text.length}
            onKeyDown={(e) => {
              if (e.key === "Backspace" || e.key === "Delete") {
                e.preventDefault();
              }
            }}
            onPaste={(e) => e.preventDefault()}
            onChange={(e) => {
              const value = e.target.value;

              setUserInput(value);

              // Start timer when user starts typing
              if (!isRunning && value.length > 0) {
                setIsRunning(true);
              }

              if (value.length === paragraph?.text.length) {
                setIsRunning(false);
                setIsFinished(true);
              }
            }}
            autoFocus
            className="visually-hidden"
            ref={inputRef}
          />
        </div>
        <div className="p-3 d-flex justify-content-center">
          <button className="btn btn-dark d-flex gap-1" onClick={restartTest}>
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
