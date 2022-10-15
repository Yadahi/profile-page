const FormSelect = ({ label, title, values, className = "form__control" }) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={label} className="form__label">
          {title}
        </label>

        <select name={label} id={label} className="form__select">
          {values.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default FormSelect;
