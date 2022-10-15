import "../../../assets/scss/Form.scss";

import NotificationForm from "./NotificationForm";
import ApplicationSettingsForm from "./ApplicationSettingsForm";
import PersonalInfoForm from "./PersonalInfoForm";
import UserAccountForm from "./UserAccountForm";

const Form = () => {
  return (
    <div>
      <div className="form">
        <div className="form__all">
          <ul className="form__sections">
            <PersonalInfoForm />
            <NotificationForm />
            <ApplicationSettingsForm />
            <UserAccountForm />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
