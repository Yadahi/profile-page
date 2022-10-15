import "../../../assets/scss/AccordionForm.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const AccordionForm = ({ title, text }) => {
  return (
    <div className="accordion-form">
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h2>{title}</h2>
        </AccordionSummary>
        <AccordionDetails>{text}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionForm;
