import { Link } from "react-router-dom";

import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Testmonials from "../components/landing/Testmonials";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div id="landing-page">
      <Header />
      <Hero />
      <About />
      <Testmonials />
      {/* Formating -1 (more about consistency) */}
      {/* Why Header, Hero, About, Testimonial and Footer are components */}
      {/* But this one not */}
      <section id="join">
        <div className="container">
          <h2>Create an account and Start you journey with Bright Brain</h2>
          <Link className="primary-button" to="/sign-up">
            Create account
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
