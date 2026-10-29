import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [mode, setMode] = useState("Timed(60s)");

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
