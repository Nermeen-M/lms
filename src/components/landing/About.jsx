import aboutImage from "../../assets/images/mental.png";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>
          About <span>bright brain</span>
        </h2>
        <p>
          Bright brain offers kids from around the world the chance to learn and
          have fun together in a supportive environment.
        </p>
        <p>We provide a varied, challenging and exciting range of courses.</p>
        <p>
          Our main objective is to see our students grow in confidence and
          ultimately make good life decisions. We want to prepare them for the
          future and give them the tools to flourish.
        </p>
        <img src={aboutImage} />
      </div>
    </section>
  );
}
