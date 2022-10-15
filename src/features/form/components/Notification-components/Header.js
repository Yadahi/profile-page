import "../../../../assets/scss/Notification.scss";

const values = [
  { id: 1, value: "Daily" },
  { id: 2, value: "Weekly" },
  { id: 3, value: "Monthly" },
  { id: 4, value: "Yearly" },
];
const Header = ({ currence, selectCurrence }) => {
  const handleRadioClick = (item) => {
    selectCurrence(item.value);
  };
  return (
    <div className="notification__header">
      {values.map((v) => {
        return (
          <div
            key={v.id}
            value={v.value}
            className={`notification__button ${
              currence === v.value ? "notification__button--selected" : ""
            }`}
            onClick={() => handleRadioClick(v)}
          >
            <strong>{v.value}</strong>
          </div>
        );
      })}
    </div>
  );
};
export default Header;
