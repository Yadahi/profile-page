import "./assets/scss/App.scss";
import "./assets/scss/Heading.scss";
import "./assets/scss/AccordionForm.scss";
import Sidebar from "./features/form/components/Sidebar";
import Form from "./features/form/components/Form";
import ProfileInfo from "./features/form/components/ProfileInfo";

function App() {
  return (
    <div className="app">
      <div className="app__template">
        <Sidebar />
        <div className="app__main-content">
          <div className="heading">
            <h1>My Profile</h1>
            <button className="form__button">Save My Profile</button>
          </div>
          <ProfileInfo />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
