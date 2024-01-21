import icon from "../assets/camera.svg";
import { useState } from "react";

const Main = ({ picture }) => {
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const getImage = (e) => {
    const { files } = e.target;
    const selectImage = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectImage);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
    console.log(selectImage);
  };

  return (
    <main style={{ display: "flex", paddingLeft: "15px" }}>
      <div>
        <p>{picture}</p>
        <label htmlFor="file">
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              flexDirection: "column",
            }}
          >
            <img src={icon} style={{ width: 50, height: 50 }} />
            <img src={uploadImgUrl} style={{ width: 200, height: 200 }} />
          </div>
        </label>
        <input
          type="file"
          name="file"
          id="file"
          style={{ display: "none" }}
          onChange={getImage}
          accept="image/*"
        />
      </div>
    </main>
  );
};

export default Main;
