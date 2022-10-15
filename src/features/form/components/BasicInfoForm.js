import AccountBoxIcon from "@mui/icons-material/AccountBox";

import Accordion from "@mui/material/Accordion";
import FormInput from "./FormInput";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BasicInfoForm = () => {
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<ExpandMoreIcon />}
      >
        <h3>Basic Info</h3>
      </AccordionSummary>
      <AccordionDetails>
        <form name="form-basic-info">
          <div className="form__row">
            <FormInput
              title={"First Name:"}
              label={"first-name"}
              type={"text"}
            />
            <FormInput title={"Last Name:"} label={"last-name"} type={"text"} />
          </div>
          <FormInput title={"Email:"} label={"email"} type={"email"} />
          <FormInput title={"Job Title:"} label={"job title"} type={"text"} />
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default BasicInfoForm;
