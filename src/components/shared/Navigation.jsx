import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../../assets/images/logo-white.png";

export default function Navigation() {
  return (
    <nav>
      <img className="logo" src={logo} />
      <Link to="/">
        <FontAwesomeIcon icon={solid("book-open")} />
        <span>Courses</span>
      </Link>
      <Link target="_blank" to="https://calendar.google.com/calendar/u/0/r">
        <FontAwesomeIcon icon={solid("calendar-days")} />
        <span>Calendar</span>
      </Link>
      <Link target="_blank" to="https://slack.com/">
        <FontAwesomeIcon icon={brands("slack")} />
        <span>Slack</span>
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={solid("user")} />
        <span>Profile</span>
      </Link>
      <Link>
        <FontAwesomeIcon icon={solid("right-from-bracket")} />
        <span>Logout</span>
      </Link>
    </nav>
  );
}
