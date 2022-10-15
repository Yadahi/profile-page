import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}));

export const makeTooltipPasswordTitle = (
  isLower,
  isUpper,
  isMinChar,
  isMinNum
) => {
  return (
    <ul className="tooltip">
      <li className="tooltip__item">
        <span className="tooltip__icon">
          {isLower ? (
            <CheckCircleIcon color="success" />
          ) : (
            <ErrorIcon color="disabled" />
          )}
        </span>
        <div>
          at least <strong>1 lower-case</strong> character
        </div>
      </li>
      <li className="tooltip__item">
        <span className="tooltip__icon">
          {isUpper ? (
            <CheckCircleIcon color="success" />
          ) : (
            <ErrorIcon color="disabled" />
          )}
        </span>
        <div>
          at least <strong>1 upper-case</strong> character
        </div>
      </li>
      <li className="tooltip__item">
        <span className="tooltip__icon">
          {isMinChar ? (
            <CheckCircleIcon color="success" />
          ) : (
            <ErrorIcon color="disabled" />
          )}
        </span>
        <div>
          at least <strong>8 characters</strong> long
        </div>
      </li>
      <li className="tooltip__item">
        <span className="tooltip__icon">
          {isMinNum ? (
            <CheckCircleIcon color="success" />
          ) : (
            <ErrorIcon color="disabled" />
          )}
        </span>
        <div>
          at least <strong>1 number</strong>
        </div>
      </li>
    </ul>
  );
};
