import Navbar from "../../organism/navbar";
import Sidebar from "../../organism/sidebar";
import "./newPage.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

type newScreenProps = {
  inputs: Array<{
    id?: number;
    label?: string;
    type?: string;
    placeholder?: string;
  }>;
  title?: string;
};

const NewPage = ({ inputs, title }: newScreenProps) => {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="font font-medium text-2xl text-gray-400">{title}</h1>
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
                <label htmlFor="file">
                  image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" className="inputt hidden" />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    className="inputt"
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <br />
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
