import Navbar from "../../organism/navbar";
import Sidebar from "../../organism/sidebar";
import "./newPage.scss";

const NewPage = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        Test
      </div>
    </div>
  );
};

export default NewPage;
