import { useNavigate } from "react-router-dom";

import arrow from "../assets/images/arrow.png";
import placeholder from "../assets/images/placeholder.jpg";

export default function AdminStudyMaterialItem({ item, path }) {
  const navigate = useNavigate();

  const { id, title, file, url } = item;
  return (
    <div className="study-item-card" onClick={() => navigate(`/${path}/${id}`)}>
      <img src={arrow} />
      <p>{title}</p>
      {file && (
        <img src={!file ? placeholder : file} width="100" height="100" />
      )}
      {url && (
        <a target="_blank" href={url}>
          {file}
        </a>
      )}
    </div>
  );
}
