import { Link } from "react-router-dom";

import Header from "../components/Header";

import leftImage from "../assets/images/boy.png";
import rightImage from "../assets/images/girl.png";

export default function Landing() {
  return (
    <div id="landing-page">
      <Header />
      <section id="hero">
        <div className="background">
          <h1>Teach kids courses that are FUN</h1>
        </div>
        <div className="images">
          <img src={leftImage} />
          <img src={rightImage} />
        </div>
      </section>

      {/* <Link to="/login">Get started</Link> */}
    </div>
  );
}
