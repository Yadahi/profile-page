import "../../../assets/scss/ProfileInfo.scss";
import UploadAndDisplayImage from "./UploadImage";
import BoxForm from "./BoxForm";

const ProfileInfo = () => {
  return (
    <BoxForm>
      <div className="profile-info__wrapper">
        <div className="profile-info__image">
          <UploadAndDisplayImage />
        </div>
        <div className="profile-info__title">
          <h2>John Newman</h2>
        </div>
        <div className="profile-info__info">
          <p>Test</p>
          <p>no-reply@google.com</p>
        </div>
      </div>
    </BoxForm>
  );
};

export default ProfileInfo;
