import { useState } from "react";
import FormInput from "./FormInput";
import LoadingComponent from "./LoadingComponent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeTooltipPasswordTitle } from "../helper/helper";

import useInput from "../hooks/useInput";

const LOWER_CASE_REGEX = /^(?=.*[a-z])[a-zA-Z\d]/;
const UPPER_CASE_REGEX = /^(?=.*[A-Z])[a-zA-Z\d]/;
const MIN_NUM_REGEX = /^(?=.*\d)[a-zA-Z\d]/;
const MIN_CHAR_REGEX = /^[a-zA-Z\d]{8,}/;

const isLowerPassword = (value) => LOWER_CASE_REGEX.test(value);
const isUpperPassword = (value) => UPPER_CASE_REGEX.test(value);
const isMinCharPassword = (value) => MIN_CHAR_REGEX.test(value);
const isMinNumPassword = (value) => MIN_NUM_REGEX.test(value);

const PasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  let changePassowrdIsValid = false;
  let passwordsAreValid = false;
  let formIsInvalid = false;
  let formIsValid = false;

  const {
    value: currentPasswordInput,
    inputValueIsLower: currentPasswordIsLower,
    inputValueIsUpper: currentPasswordIsUpper,
    inputValueIsMinChar: currentPasswordIsMinChar,
    inputValueIsMinNum: currentPasswordIsMinNum,
    inputValueIsValid: currentPasswordIsValid,
    valueHasError: currentPasswordInputIsInvalid,
    inputValueChangeHandler: currentPasswordChangeHandler,
    resetInput: currentPasswordResetInput,
  } = useInput(
    isLowerPassword,
    isUpperPassword,
    isMinCharPassword,
    isMinNumPassword
  );

  const {
    value: newPasswordInput,
    inputValueIsLower: newPasswordIsLower,
    inputValueIsUpper: newPasswordIsUpper,
    inputValueIsMinChar: newPasswordIsMinChar,
    inputValueIsMinNum: newPasswordIsMinNum,
    inputValueIsValid: newPasswordIsValid,
    valueHasError: newPasswordInputIsInvalid,
    inputValueChangeHandler: newPasswordChangeHandler,
    resetInput: newPasswordResetInput,
  } = useInput(
    isLowerPassword,
    isUpperPassword,
    isMinCharPassword,
    isMinNumPassword
  );

  const {
    value: repeatPasswordInput,
    inputValueIsLower: repeatPasswordIsLower,
    inputValueIsUpper: repeatPasswordIsUpper,
    inputValueIsMinChar: repeatPasswordIsMinChar,
    inputValueIsMinNum: repeatPasswordIsMinNum,
    inputValueIsValid: repeatPasswordIsValid,
    valueHasError: repeatPasswordInputIsInvalid,
    inputValueChangeHandler: repeatPasswordChangeHandler,
    resetInput: repeatPasswordResetInput,
  } = useInput(
    isLowerPassword,
    isUpperPassword,
    isMinCharPassword,
    isMinNumPassword
  );

  if (currentPasswordIsValid && newPasswordIsValid && repeatPasswordIsValid) {
    passwordsAreValid = true;
  }

  if (
    currentPasswordInput !== newPasswordInput &&
    newPasswordInput === repeatPasswordInput
  ) {
    changePassowrdIsValid = true;
  }

  if (changePassowrdIsValid && passwordsAreValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log("is loading");
      setIsLoading(false);
      console.table(
        "/ currentPasswordInput:",
        currentPasswordInput,
        "/ newPasswordInput:",
        newPasswordInput,
        "/ repeatPasswordInput:",
        repeatPasswordInput
      );
      currentPasswordResetInput();
      newPasswordResetInput();
      repeatPasswordResetInput();
    }, 2000);
  };

  const currentPasswordInputClass = currentPasswordInputIsInvalid
    ? "form__control form__control--invalid"
    : "form__control";

  const newPasswordInputClass = newPasswordInputIsInvalid
    ? "form__control form__control--invalid"
    : "form__control";

  const repeatPasswordInputClass = repeatPasswordInputIsInvalid
    ? "form__control form__control--invalid"
    : "form__control";

  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon />}
        className="test"
      >
        <h3>Change password</h3>
      </AccordionSummary>
      <AccordionDetails>
        {isLoading && (
          <LoadingComponent>It's not you. It's me.</LoadingComponent>
        )}
        <form name="form-password" onSubmit={formSubmitHandler}>
          <FormInput
            title={"Current password:"}
            label={"current-password"}
            type={"password"}
            className={currentPasswordInputClass}
            value={currentPasswordInput}
            handleOnChange={currentPasswordChangeHandler}
            tooltipText={makeTooltipPasswordTitle(
              currentPasswordIsLower,
              currentPasswordIsUpper,
              currentPasswordIsMinChar,
              currentPasswordIsMinNum
            )}
          />

          <FormInput
            title={"New Password:"}
            label={"new-password"}
            type={"password"}
            className={newPasswordInputClass}
            value={newPasswordInput}
            handleOnChange={newPasswordChangeHandler}
            tooltipText={makeTooltipPasswordTitle(
              newPasswordIsLower,
              newPasswordIsUpper,
              newPasswordIsMinChar,
              newPasswordIsMinNum
            )}
          />

          <FormInput
            title={"Repeat password:"}
            label={"repeat-password"}
            type={"password"}
            className={repeatPasswordInputClass}
            value={repeatPasswordInput}
            handleOnChange={repeatPasswordChangeHandler}
            tooltipText={makeTooltipPasswordTitle(
              repeatPasswordIsLower,
              repeatPasswordIsUpper,
              repeatPasswordIsMinChar,
              repeatPasswordIsMinNum
            )}
          />
          {formIsInvalid && <p>Form is invalid</p>}
          <div className="form__control form__control--position-right">
            <button className="form__button" disabled={!formIsValid}>
              Change password
            </button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default PasswordForm;
