import { useNavigate } from "react-router-dom";
import placeholder from "../assets/images/placeholder.jpg";

// good
export default function CourseItem({ item }) {
  const navigate = useNavigate();

  const { id, title, description, image } = item;
  return (
    <div className="course-card" onClick={() => navigate(`/courses/${id}`)}>
      <div className="image-container">
        <img src={!image ? placeholder : image} width="100" height="100" />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
