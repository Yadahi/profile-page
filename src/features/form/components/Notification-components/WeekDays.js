import "../../../../assets/scss/Notification.scss";

const WeekDays = ({ days, setDays }) => {
  const handleDay = (id) => {
    setDays(
      days.map((item) => {
        if (item.id === id) {
          return { ...item, select: !item.select };
        }
        return { ...item };
      })
    );
  };

  return (
    <div className="notification__section">
      <h4>Repeats on</h4>
      <div className="notification__days">
        {days.map((day) => {
          return (
            <div
              className={`notification__day ${
                day.select ? "notification__day--selected" : ""
              }`}
              key={day.id}
              id={day.id}
              onClick={() => handleDay(day.id)}
            >
              <strong>{day.day}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekDays;
