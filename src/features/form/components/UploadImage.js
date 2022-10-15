import { useState, useRef } from "react";
import "../../../assets/scss/UploadImage.scss";
import { Avatar } from "@mui/material";
import profile from "../../../assets/images/profile.png";
import DeleteIcon from "@mui/icons-material/Delete";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleFileUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div className="upload-image">
      <div className="upload-image__image">
        <Avatar
          src={selectedImage ? URL.createObjectURL(selectedImage) : profile}
          onClick={onButtonClick}
          sx={{ width: 100, height: 100 }}
          alt="avatar image"
        />
        <input
          type="file"
          name="myImage"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </div>
      {!selectedImage && (
        <span className="upload-image__add-button">Click to change photo</span>
      )}
      {selectedImage && (
        <div className="upload-image__remove-button">
          {/* TODO add remove button */}
          <button onClick={() => setSelectedImage(null)}>
            <DeleteIcon fontSize="small" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadAndDisplayImage;
