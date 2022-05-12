import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <div>
          <p className="title">MAIN</p>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <DashboardIcon className="icon text-[#7451f8]" />
            <h3>Dashboard</h3>
          </div>
          <div>
            <p className="title">LISTS</p>
            <Link to="/users">
              <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
                <PersonOutlineOutlinedIcon className="icon text-[#7451f8]" />
                <h3>Users</h3>
              </div>
            </Link>
          </div>
          <Link to="/products">
            <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
              <ProductionQuantityLimitsOutlinedIcon className="icon text-[#7451f8]" />
              <h3>Products</h3>
            </div>
          </Link>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <SubscriptionsOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Orders</h3>
          </div>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-auto">
            <LocalShippingOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Delivery</h3>
          </div>
        </div>

        <div>
          <p className="title">USEFUL</p>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <BarChartOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Stats</h3>
          </div>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <NotificationsNoneOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Notifications</h3>
          </div>
        </div>

        <div>
          <p className="title">SERVICE</p>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <HealthAndSafetyOutlinedIcon className="icon text-[#7451f8]" />
            <h3>System Health</h3>
          </div>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <PsychologyOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Logs</h3>
          </div>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] ">
            <SettingsOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Settings</h3>
          </div>
        </div>

        <div>
          <p className="title">USER</p>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <AccountCircleOutlinedIcon className="icon text-[#7451f8]" />
            <h3>profile</h3>
          </div>
          <div className="flex items-center p-1 hover:bg-[#ece8ff] cursor-pointer">
            <ExitToAppOutlinedIcon className="icon text-[#7451f8]" />
            <h3>Logout</h3>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="coloredOption"></div>
        <div className="coloredOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
