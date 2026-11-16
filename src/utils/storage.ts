export type TestResult = {
  wpm: number;
  accuracy: number;
  correctCharacters: number;
  incorrectCharacters: number;
  previousBest: number | null; // useful on the high score page
  date: string;
};

const PERSONAL_BEST_KEY = "typingTest.personalBest";
const LAST_RESULT_KEY = "typingTest.lastResult";

export const getPersonalBest = (): number | null => {
  try {
    const value = localStorage.getItem(PERSONAL_BEST_KEY);
    return value === null ? null : Number(value);
  } catch {
    return null;
  }
};

export const setPersonalBest = (wpm: number) => {
  try {
    localStorage.setItem(PERSONAL_BEST_KEY, String(wpm));
  } catch {
    /* storage unavailable – ignore */
  }
};

export const getLastResult = (): TestResult | null => {
  try {
    const value = localStorage.getItem(LAST_RESULT_KEY);
    return value ? (JSON.parse(value) as TestResult) : null;
  } catch {
    return null;
  }
};

export const saveLastResult = (result: TestResult) => {
  try {
    localStorage.setItem(LAST_RESULT_KEY, JSON.stringify(result));
  } catch {
    /* ignore */
  }
};
