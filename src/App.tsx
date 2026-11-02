import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { useEffect, useState } from "react";

type Paragraph = {
  id: string;
  text: string;
};

type ParagraphData = {
  easy: Paragraph[];
  medium: Paragraph[];
  hard: Paragraph[];
};

type Difficulty = "easy" | "medium" | "hard";

function App() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [mode, setMode] = useState("Timed(60s)");
  const [paragraphs, setParagraphs] = useState<ParagraphData>({
    easy: [],
    medium: [],
    hard: [],
  });

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

  const getRandomParagraph = (difficulty: Difficulty) => {
    const selectedParagraphs: Paragraph[] | undefined = paragraphs[difficulty];
    const randomIndex = Math.floor(Math.random() * selectedParagraphs.length);
    const randomParagraph = selectedParagraphs[randomIndex];
    return randomParagraph;
  };

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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
