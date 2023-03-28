import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Testmonials from "../components/landing/Testmonials";
import Join from "../components/landing/Join";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div id="landing-page">
      <Header />
      <Hero />
      <About />
      <Testmonials />
      <Join />
      <Footer />
    </div>
  );
}
