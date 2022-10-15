import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import BoxForm from "./BoxForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddBoxIcon from "@mui/icons-material/AddBox";

const UserAccountForm = () => {
  return (
    <BoxForm>
      <li className="form__section" id="form-section_02">
        <label htmlFor="form-section_02">
          <h2 className="box-container__label">
            <PeopleAltIcon />
            <span>Account & Devices</span>
          </h2>
        </label>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <h3>User Account Pairing (Single Sign-On)</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="box-container__label">
              <AddBoxIcon color="success" />
              <span>Add Account</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <h3>Recently Used Devices</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="form__control">
              <h4>Windows 10</h4>
              <p>Right now</p>
            </div>
            <div className="form__control">
              <h4>Browser</h4>
              <p>Chrome 111.0 00.00.000.00 - Right now</p>
              <p>00.99.000.00 - 15.10.2055 00:19</p>
              <p>00.99.000.00 - 15.10.2055 00:34</p>
              <p>00.99.000.00 - 15.10.2055 00:24</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <h3>My Document Subscriptions (0)</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="form__control">
              <p>You have no active Document subscription.</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </li>
    </BoxForm>
  );
};

export default UserAccountForm;
