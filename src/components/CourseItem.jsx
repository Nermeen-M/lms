import { useNavigate, useParams } from "react-router-dom";
import placeholder from "../assets/images/placeholder.jpg";

export default function CourseItem({ item }) {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const { title, description, image } = item;
  <a className="course-card" onClick={() => navigate(`/courses/${courseId}`)}>
    <div className="image-container">
      <img src={!image ? placeholder : image} width="100" height="100" />
    </div>
    <div className="details">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>;
}
