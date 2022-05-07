import Chart from "../../organism/chart";
import FeaturedChart from "../../organism/featured";
import Navbar from "../../organism/navbar";
import Sidebar from "../../organism/sidebar";
import Widget from "../../organism/widgets";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transanctions</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
