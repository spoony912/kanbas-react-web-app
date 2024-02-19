import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaLaptop, FaArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 wd-account-color" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaHistory className="fs-2" /> },
    { label: "Studio",  icon: <FaLaptop className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowAltCircleRight className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-flex">
      <ul className="wd-kanbas-navigation d-none d-md-block">
        <li >
          <img src="/images/neulogo.jpg" alt="logo" className="wd-logo" ></img>
        </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}>
               {link.icon} {link.label} </Link>
          </li>
        ))}
    </ul>

    </div>
    
  );
}
export default KanbasNavigation;
