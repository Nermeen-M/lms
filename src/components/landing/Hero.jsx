import leftImage from "../../assets/images/boy.png";
import rightImage from "../../assets/images/girl.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className="background">
        <h1>
          Teach kids courses that are <span>FUN</span>
        </h1>
      </div>
      <img src={leftImage} />
      <img src={rightImage} />
    </section>
  );
}
