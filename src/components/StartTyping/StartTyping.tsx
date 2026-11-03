import { useNavigate } from "react-router-dom";
import type { Paragraph } from "../../types/types";

export const StartTyping = ({
  paragraph,
}: {
  paragraph: Paragraph | undefined;
}) => {
  const navigate = useNavigate();
  return (
    <div className="container flex-grow-1 d-flex flex-column position-relative">
      <div>
        <p
          onClick={() => navigate("/typing-test")}
          className="text-white py-3 fs-3"
          style={{ filter: "blur(6px)" }}
        >
          {paragraph?.text}
        </p>
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/typing-test")}
          >
            Start Typing Test
          </button>
          <p className="text-white">Or click the text and start typing</p>
        </div>
      </div>
    </div>
  );
};
