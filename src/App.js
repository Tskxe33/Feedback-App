import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { feedbackData } from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((feed) => feed.id !== id));
    }
  };

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </div>
            </>
          }
        ></Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:id/:name" element={<Post />} />
      </Routes>

      <AboutIconLink />
    </Router>
  );
}

export default App;
