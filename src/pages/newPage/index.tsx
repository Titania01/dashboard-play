import Navbar from "../../organism/navbar";
import Sidebar from "../../organism/sidebar";
import "./newPage.scss";

const NewPage = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="font font-medium text-2xl text-gray-400">
            Add New User
          </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" className="inputt" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" className="inputt" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="john_doe@gmail.com"
                  className="inputt"
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+234 843 6755"
                  className="inputt"
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" className="inputt" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  className="inputt"
                  placeholder="Elon St. 216 Newyork"
                />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="password" className="inputt" placeholder="USA" />
              </div>
              <button className="bg-red-400 p-1 rounded-md">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
