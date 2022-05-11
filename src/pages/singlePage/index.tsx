import Chart from "../../organism/chart";
import Navbar from "../../organism/navbar";
import Sidebar from "../../organism/sidebar";
import BasicTable from "../../organism/table";
import List from "../list";
import "./singlePage.scss";

const SinglePage = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title font-medium  text-3xl">Information</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/81bc8mA3nKL. _AC_UY327_FMwebp_QL65_.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle font-medium text-2xl">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 234 78954 90</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. Newyork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3.2 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title font-medium  text-3xl">Last transaction</h1>
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
