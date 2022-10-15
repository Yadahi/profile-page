import { useState } from "react";

const useInput = (
  lowerValidateValue,
  upperValidateValue,
  minCharValidateValue,
  minNumValidateValue
) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueIsLower = lowerValidateValue(inputValue) && inputValue;
  const inputValueIsUpper = upperValidateValue(inputValue) && inputValue;
  const inputValueIsMinChar = minCharValidateValue(inputValue) && inputValue;
  const inputValueIsMinNum = minNumValidateValue(inputValue) && inputValue;

  const isValid =
    inputValueIsLower &&
    inputValueIsUpper &&
    inputValueIsMinChar &&
    inputValueIsMinNum;

  const inputValueIsNotValid =
    (!inputValueIsLower ||
      !inputValueIsUpper ||
      !inputValueIsMinChar ||
      !inputValueIsMinNum) &&
    inputValue;

  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  // can be used to reset the password field, for example after submitting the changes
  const resetInput = () => {
    setInputValue("");
  };

  return {
    value: inputValue,
    inputValueIsLower: inputValueIsLower,
    inputValueIsUpper: inputValueIsUpper,
    inputValueIsMinChar: inputValueIsMinChar,
    inputValueIsMinNum: inputValueIsMinNum,
    inputValueIsValid: isValid,
    valueHasError: inputValueIsNotValid,
    inputValueChangeHandler,
    resetInput,
  };
};

export default useInput;
