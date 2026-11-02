export type Paragraph = {
  id: string;
  text: string;
};

export type Difficulty = "easy" | "medium" | "hard";

export type ParagraphData = {
  easy: Paragraph[];
  medium: Paragraph[];
  hard: Paragraph[];
};

export type HomepageProps = {
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  onStartButtonClick: (difficulty: Difficulty) => Paragraph | undefined;
};

export type TestcontrolsProps = {
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

export type StartTypingProps = {
  handleStart: () => void;
};
