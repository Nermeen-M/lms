import { Link, useNavigate, useParams } from "react-router-dom";

import arrow from "../assets/images/arrow.png";
import placeholder from "../assets/images/placeholder.jpg";

export default function AdminStudyMaterialItem({ item }) {
  const { courseId } = useParams();

  const { id, title, file, url } = item;

  return (
    <div className="study-item-card student-side">
      <img className="bullet" src={arrow} />
      {file && <Link to={`/courses/${courseId}/${id}`}>{title}</Link>}
      {url && (
        <Link target="_blank" to={url}>
          {title}
        </Link>
      )}
    </div>
  );
}