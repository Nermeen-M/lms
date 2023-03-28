import { Link } from "react-router-dom";

import arrow from "../assets/images/arrow.png";

export default function AdminStudyMaterialItem({ item }) {
  const { title, file, url } = item;

  return (
    <Link
      className="study-item-card student-side"
      to={file ? file : url}
      target="_blank"
    >
      <img className="bullet" src={arrow} />
      <span>{title}</span>
    </Link>
  );
}
