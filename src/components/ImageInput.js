import React, { useState } from "react";

const ImageInput = (props) => {
  const [imageFile, setImageFile] = useState("");

  const handleClick = async () => {
    try {
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "");
      data.append("cloud_name", "");

      const response = await fetch("https://api.cloudinary.com/v1_1/xxxxx/image/upload", {
        method: "POST",
        body: data,
      });
      const jsonData = await response.json();
      console.log("json: " + jsonData.url);
      await props.setNewItem({ ...props.newItem, image: jsonData.url });
      alert("Image upload Success");
    } catch (error) {
      alert("Image upload Failed");
    }
  };

  return (
    <div className="imginput">
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} accept="image/png,image/jpg" />
      <button onClick={handleClick} disabled={!imageFile}>
        画像Upload
      </button>
    </div>
  );
};

export default ImageInput;
