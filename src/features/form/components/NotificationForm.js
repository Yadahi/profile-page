import BoxForm from "./BoxForm";
import Notification from "./Notification";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationForm = () => {
  return (
    <BoxForm>
      <li className="form__section" id="form-section_02">
        <label htmlFor="form-section_02">
          <h2 className="box-container__label">
            <NotificationsIcon />
            <span>Notification</span>
          </h2>
        </label>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon />}
            //   aria-controls="panel1a-content"
          >
            <h3>Notifiaction Settings</h3>
          </AccordionSummary>
          <AccordionDetails>
            <Notification />
          </AccordionDetails>
        </Accordion>
      </li>
    </BoxForm>
  );
};
export default NotificationForm;
