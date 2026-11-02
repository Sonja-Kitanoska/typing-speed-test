import type { StartTypingProps } from "../../types/types";

export const StartTyping = ({ handleStart }: StartTypingProps) => {
  return (
    <div className="container flex-grow-1 d-flex flex-column justify-content-center ">
      <div className="text-center">
        <button onClick={handleStart} className="btn btn-primary">
          Start Typing Test
        </button>
        <p className="text-white">Or click the text and start typing</p>
      </div>
    </div>
  );
};
