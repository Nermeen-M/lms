import { Link } from "react-router-dom";

export default function Join() {
  return (
    <section id="join">
      <div className="container">
        <h2>Create an account and Start you journey with Bright Brain</h2>
        <Link className="primary-button" to="/sign-up">
          Create account
        </Link>
      </div>
    </section>
  );
}
