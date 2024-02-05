import { Menu } from "antd";
import { useState } from "react";
import DashboardIcon from "./../assets/dashboard-icon.png";
import AttendenceIcon from "./../assets/attendence-icon.png";
import LeaveIcon from "./../assets/leave-icon.png";
import RecrumentIcon from "./../assets/recrument-icon.png";
import PayrollIcon from "./../assets/payroll-icon.png";
import LoanIcon from "./../assets/loan-icon.png";
import OtherIcon from "./../assets/others.png";
import Logo from "./../assets/log-3.svg";
import BackIcon from "./../assets/export-icon.png";
import Topbar from "./Topbar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "sub1", <img src={DashboardIcon} />, [
    getItem("Dashboard", "/dashboard"),
  ]),
  getItem("Attendance", "sub2", <img src={AttendenceIcon} />, [
    getItem("Attendance Request", "/dashboard/attendence-request"),
    getItem("My Attendance", "/dashboard/my-attendence"),
    getItem("My Shift Time", "/dashboard/my-shift-time"),
    getItem("Remote Work Request", "/dashboard/remote-work-request"),
  ]),
  getItem("Leave", "sub3", <img src={LeaveIcon} />, [
    getItem("Leave", "/dashboard/leave"),
  ]),
  getItem("Recruitment", "sub4", <img src={RecrumentIcon} />, [
    getItem("Recruitment", "/dashboard/recruitment"),
  ]),
  getItem("Payroll", "sub5", <img src={PayrollIcon} />, [
    getItem("Payroll", "/dashboard/payroll"),
  ]),
  getItem("Loan", "sub6", <img src={LoanIcon} />, [
    getItem("Loan", "/dashboard/loan"),
  ]),
  getItem("Others", "sub7", <img src={OtherIcon} />, [
    getItem("Others", "/dashboard/others"),
  ]),
];

const rootSubmenuKeys = [
  "sub1",
  "sub2",
  "sub3",
  "sub4",
  "sub5",
  "sub6",
  "sub7",
];

const Sidebar = ({ children }) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const navigate = useNavigate();
  const getMenuEvent = (route) => {
    navigate(route.key);
  };
  return (
    <div className="flex">
      <div className="side-menu-main bg-primary w-[282px]">
        <div className="py-4 mx-[1.375rem] flex justify-between items-center border-b border-dashed">
          <img src={Logo} alt="" />
          <img src={BackIcon} alt="" />
        </div>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 282,
            fontWeight: "500",
            height: "100vh",
          }}
          items={items}
          onClick={getMenuEvent}
        />
      </div>
      <div className="flex-grow">
        <Topbar />
        <div className="px-[1.875rem]">{children}</div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
