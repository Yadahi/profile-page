import "../../../assets/scss/Tooltip.scss";
import { LightTooltip } from "../helper/helper";

const FormInput = ({
  label,
  title,
  type,
  value,
  handleOnChange,
  className = "form__control",
  tooltipText,
}) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={label} className="form__label">
          {title}
        </label>
        <LightTooltip title={tooltipText} placement="right-start">
          <input
            type={type}
            id={label}
            value={value}
            className="form__input"
            onChange={handleOnChange}
          ></input>
        </LightTooltip>
      </div>
    </>
  );
};

export default FormInput;
