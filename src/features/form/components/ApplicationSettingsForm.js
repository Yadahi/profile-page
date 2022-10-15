import BoxForm from "./BoxForm";
import FormSelect from "./FormSelect";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";

const ApplicationSettingsForm = () => {
  return (
    <BoxForm>
      <li className="form__section" id="form-section_02">
        <label htmlFor="form-section_02">
          <h2 className="box-container__label">
            <SettingsIcon />
            <span>Application Settings</span>
          </h2>
        </label>
        <form name="application-settings-form">
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>Language</h3>
            </AccordionSummary>
            <AccordionDetails>
              <FormSelect
                title={"Language:"}
                label={"language"}
                values={[" — Select value — ", "English", "Czech"]}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>Date & Time</h3>
            </AccordionSummary>
            <AccordionDetails>
              <FormSelect
                title={"Date format:"}
                label={"date-format"}
                values={[
                  "mm/dd/YYYY",
                  "mm/dd/YY",
                  "dd.mm.YYYY",
                  "dd/mm/YYYY",
                  "YYYY-mm-dd",
                ]}
              />
              <FormSelect
                title={"Short date:"}
                label={"short-date"}
                values={["dd.mm.", "Jun dd"]}
              />
              <FormSelect
                title={"Time Format:"}
                label={"time-format"}
                values={["24h", "12h (AM/PM)"]}
              />
              <FormSelect
                title={"Time zone:"}
                label={"time-zone"}
                values={[
                  "(GMT-11:00) Midway Island",
                  "(GMT-11:00) Samoa",
                  "(GMT-10:00) Hawaii",
                  "(GMT-09:00) Alaska",
                ]}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>Others</h3>
            </AccordionSummary>
            <AccordionDetails>
              <FormSelect
                title={"Number format:"}
                label={"number-format"}
                values={["1 000 000,00", "1,000,000.00", "1.000.000,00"]}
              />
              <FormSelect
                title={"Paper format:"}
                label={"paper-format"}
                values={["A5", "A4", "A3"]}
              />
              <FormSelect
                title={"Page after login:"}
                label={"page-after-login"}
                values={["My Dashboard", "Documents list", "Document"]}
              />
            </AccordionDetails>
          </Accordion>
        </form>
      </li>
    </BoxForm>
  );
};
export default ApplicationSettingsForm;
