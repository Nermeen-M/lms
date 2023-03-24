import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <footer>
      <h3>Keep in touch</h3>
      <div className="icons">
        <a>
          <FontAwesomeIcon icon={brands("facebook")} />
        </a>
        <a>
          <FontAwesomeIcon icon={brands("instagram")} />
        </a>
        <a>
          <FontAwesomeIcon icon={brands("youtube")} />
        </a>
      </div>
      <span className="copyright">&copy; 2023 - Bright Brain</span>
    </footer>
  );
}
