import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { uploadFile, downloadFile } from "../../scripts/firebase/cloudStorage";
import placeholder from "../../assets/images/placeholder.jpg";

export default function ImageInput({ item, state, path }) {
  const [form, setForm] = state;
  const [isUploading, setIsUploading] = useState(false);
  const manualId = uuidv4() + "_" + Date.now();

  async function changeHandler(event) {
    setIsUploading(true);
    const file = event.target.files[0];
    const filePath = `${path}/${manualId}_${file.name}`;

    await uploadFile(file, filePath);
    const image = await downloadFile(filePath);
    setForm({ ...form, [item.key]: image });
    setIsUploading(false);
  }

  return (
    <label className="input-image">
      <img src={!form[item.key] ? placeholder : form[item.key]} />
      {isUploading && <p>uploading...</p>}
      {/* {item.label} */}
      <input
        onChange={changeHandler}
        type={item.type}
        required={item.required}
        hidden
      />
    </label>
  );
}
