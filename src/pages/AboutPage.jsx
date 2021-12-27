import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About the project</h1>
        <p>This is a react app to leave feedback for product or service</p>
        <p>version 1.0.0</p>
        <Link to="/"> Back To home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
