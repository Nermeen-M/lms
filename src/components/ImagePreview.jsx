import { useState } from "react";

export default function ImagePreview({ file }) {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      {preview ? (
        <img src={preview} alt={file.name} width="100" height="100" />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
