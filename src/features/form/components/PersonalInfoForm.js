import BoxForm from "./BoxForm";
import BasicInfoForm from "./BasicInfoForm";
import PasswordForm from "./PasswordForm";

import AccountBoxIcon from "@mui/icons-material/AccountBox";

const PersonalInfoForm = () => {
  return (
    <BoxForm>
      <li className="form__section" id="form-section_01">
        <label htmlFor="form-section_01">
          <h2 className="box-container__label">
            <AccountBoxIcon />
            <span>Personal Information</span>
          </h2>
        </label>
        <BasicInfoForm />
        <PasswordForm />
      </li>
    </BoxForm>
  );
};

export default PersonalInfoForm;
