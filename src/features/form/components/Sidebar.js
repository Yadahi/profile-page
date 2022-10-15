import "../../../assets/scss/Sidebar.scss";
import "../../../assets/scss/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar leftmenu visible">
      <div className="scroll-wrapper">
        <div id="modules" data-tour="modules">
          <ul id="strategic" className="menu">
            <li className="goal" data-tour="goal">
              <a className="module" href="/goal/?folder=1">
                <span className="text">Deployment</span>
              </a>
            </li>
            <div>
              <li className="actions" data-tour="tasklist">
                <a className="module" href="/tasklist/?folder=1">
                  <span className="text">Action</span>
                  <span className="icon toggler icon-right"></span>
                </a>
              </li>
            </div>
            <div>
              <li className="metric" data-tour="metric">
                <a
                  className="module"
                  href="/metric/unimetric-dashboard/?folder=1"
                >
                  <span className="text">Dashboards</span>
                  <span className="icon toggler icon-right"></span>
                </a>
              </li>
            </div>
            <div>
              <li className="rps" data-tour="rps">
                <a className="module" href="/rps/?folder=1">
                  <span className="text">Cause</span>
                  <span className="icon toggler icon-right"></span>
                </a>
              </li>
            </div>
            <li className="meeting" data-tour="meeting">
              <a className="module" href="/meeting/?folder=1">
                <span className="text">Meetings</span>
              </a>
            </li>
            <div>
              <li className="report" data-tour="report">
                <a className="module" href="/report/?folder=1">
                  <span className="text">Reports</span>
                  <span className="icon toggler icon-right"></span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="notification"></div>
      <div className="control-panel">
        <div className="pinner">
          <span className="icon icon-lock-expanded"></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
