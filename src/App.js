import { useState, useEffect } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
