const YearlyLayout = () => {
  return (
    <>
      <div className="notification__section">
        <div className="notification__row ">
          <span>On</span>
          <label htmlFor="yearly-reminder-day"></label>
          <input
            id="yearly-reminder-day"
            type="number"
            placeholder="1"
            className="notification__input notification__input--number"
          ></input>
          <span>day of</span>
          <label htmlFor="yearly-reminder-month"></label>
          <select
            id="yearly-reminder-month"
            name=""
            className="notification__select"
          >
            <option value="january">January</option>
            <option value="february" defaultValue="february">
              February
            </option>
            <option value="march">March</option>
            <option value="april">April</option>
          </select>
        </div>
      </div>
      <div className="notification__section">
        <div className="notification__row ">
          <span>Repeat every</span>
          <label htmlFor="yearly-reminder"></label>
          <input
            id="yearly-reminder"
            type="number"
            placeholder="1"
            className="notification__input notification__input--number"
          ></input>
          <span>month</span>
        </div>
      </div>
      <div className="notification__section">
        <div className="notification__row">
          <span>Start at:</span>
          <label htmlFor="yearly-reminder-time"></label>
          <select
            id="yearly-reminder-time"
            name=""
            className="notification__select"
          >
            <option value="0">0:00</option>
            <option value="1">1:00</option>
            <option value="2">2:00</option>
            <option value="3">3:00</option>
            <option value="4">4:00</option>
            <option value="5">5:00</option>
            <option value="6">6:00</option>
            <option value="7">7:00</option>
            <option value="8">8:00</option>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15" defaultValue="15">
              15:00
            </option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default YearlyLayout;
