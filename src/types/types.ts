export type Paragraph = {
  id: string;
  text: string;
};

export type Difficulty = "easy" | "medium" | "hard";
export type Mode = "Timed(60s)" | "Passage";

export type ParagraphData = {
  easy: Paragraph[];
  medium: Paragraph[];
  hard: Paragraph[];
};

export type HomepageProps = {
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  paragraph: Paragraph | undefined;
};

export type TestcontrolsProps = {
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

export type TypingTestProps = {
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
  paragraph: Paragraph | undefined;
};
