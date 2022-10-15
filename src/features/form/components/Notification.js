import "../../../assets/scss/Notification.scss";
import { useState } from "react";
import Header from "./Notification-components/Header";
import DailyLayout from "./Notification-components/DailyLayout";
import WeeklyLayout from "./Notification-components/WeeklyLayout";
import MonthlyLayout from "./Notification-components/MonthlyLayout";
import YearlyLayout from "./Notification-components/YearlyLayout";

const DAYS_WEEK = [
  { id: 0, day: "Mon", select: false },
  { id: 1, day: "Tue", select: false },
  { id: 2, day: "Wed", select: false },
  { id: 3, day: "Thu", select: false },
  { id: 4, day: "Fri", select: false },
  { id: 5, day: "Sat", select: false },
  { id: 6, day: "Sun", select: false },
];
const DAYS = [
  { id: 0, day: "Mon", select: true },
  { id: 1, day: "Tue", select: true },
  { id: 2, day: "Wed", select: true },
  { id: 3, day: "Thu", select: true },
  { id: 4, day: "Fri", select: true },
  { id: 5, day: "Sat", select: true },
  { id: 6, day: "Sun", select: true },
];

const Notification = () => {
  const [currence, setCurrence] = useState("Daily");
  const [dailyWeekDays, setDailyWeekDays] = useState(DAYS);
  const [weeklyDays, setWeeklyDays] = useState(DAYS_WEEK);

  const showDaysOfWeek = () => {
    switch (currence) {
      case "Daily":
        return <DailyLayout days={dailyWeekDays} setDays={setDailyWeekDays} />;
      case "Weekly":
        return <WeeklyLayout days={weeklyDays} setDays={setWeeklyDays} />;
      case "Monthly":
        return <MonthlyLayout />;
      case "Yearly":
        return <YearlyLayout />;

      default:
        return <DailyLayout days={dailyWeekDays} setDays={setDailyWeekDays} />;
    }
  };

  return (
    <>
      <div className="notification">
        <div className="notification__container">
          <Header currence={currence} selectCurrence={setCurrence} />
          <div className="">{showDaysOfWeek()}</div>
        </div>
      </div>
    </>
  );
};

export default Notification;
