import Navbar from "../../components/Navbar/Navbar";
import { StartTyping } from "../../components/StartTyping/StartTyping";
import TestControls from "../../components/TestControls/TestControls";
import TypingStats from "../../components/TypingStats/TypingStats";

const Homepage = () => {
  return (
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <Navbar />
      <div className="d-lg-flex p-2">
        <TypingStats />
        <TestControls />
      </div>
      <StartTyping />
    </div>
  );
};

export default Homepage;
