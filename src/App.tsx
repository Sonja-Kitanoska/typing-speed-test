import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { useEffect, useState } from "react";
import type { Difficulty, Mode, Paragraph, ParagraphData } from "./types/types";
import TypingTest from "./pages/TypingTest/TypingTest";

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [mode, setMode] = useState<Mode>("Timed(60s)");
  const [paragraphs, setParagraphs] = useState<ParagraphData>({
    easy: [],
    medium: [],
    hard: [],
  });
  const [paragraph, setParagraph] = useState<Paragraph | undefined>(undefined);

  useEffect(() => {
    const fetchParagraphs = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setParagraphs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching paragraph", error);
      }
    };

    fetchParagraphs();
  }, []);

  const getRandomParagraph: (difficulty: Difficulty) => void = (
    difficulty: Difficulty,
  ) => {
    const selectedParagraphs: Paragraph[] | undefined = paragraphs[difficulty];

    if (!selectedParagraphs || selectedParagraphs.length === 0) {
      console.log("No paragraphs found for:", difficulty);
      return;
    }

    const randomIndex = Math.floor(Math.random() * selectedParagraphs.length);
    const randomParagraph = selectedParagraphs[randomIndex];
    setParagraph(randomParagraph);
  };

  useEffect(() => {
    if (paragraphs[difficulty].length === 0) return;
    getRandomParagraph(difficulty);
  }, [paragraphs, difficulty]);

  // // Start timer when the user begins typing
  // const handleStart = () => {
  //   if (!isFinished) {
  //     setIsRunning(true);
  //   }
  // };

  // // Stop timer when passage is completed
  // const handleFinish = () => {
  //   setIsRunning(false);
  //   setIsFinished(true);
  // };

  // // Reset timer when mode or paragraph changes
  // useEffect(() => {
  //   setIsRunning(false);
  //   setIsFinished(false);
  //   setTimer(mode === "Timed(60s)" ? 60 : 0);
  // }, [mode, paragraph]);

  // // Timer logic
  // useEffect(() => {
  //   if (!isRunning || isFinished) return;

  //   const interval = setInterval(() => {
  //     setTimer((prev) => {
  //       if (mode === "Timed(60s)") {
  //         return Math.max(0, prev - 1);
  //       }

  //       return prev + 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [isRunning, isFinished, mode]);

  // // End timed test when timer reaches zero
  // useEffect(() => {
  //   if (mode === "Timed(60s)" && timer === 0 && isRunning) {
  //     setIsRunning(false);
  //     setIsFinished(true);
  //   }
  // }, [timer, mode, isRunning]);

  // const handleTyping = (value: string) => {
  //   if (isFinished) return;

  //   if (!isRunning) {
  //     handleStart();
  //   }

  //   setTypedText(value);

  //   if (value.length >= (paragraph?.text.length ?? 0)) {
  //     handleFinish();
  //   }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              mode={mode}
              setMode={setMode}
              paragraph={paragraph}
            />
          }
        />
        <Route
          path="/typing-test"
          element={
            <TypingTest
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              mode={mode}
              setMode={setMode}
              paragraph={paragraph}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
