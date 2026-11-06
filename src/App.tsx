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
              getRandomParagraph={getRandomParagraph}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
