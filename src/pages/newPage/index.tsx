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
  const [file, setFile] = useState<FileList | null>();
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
              src={
                file
                  ? URL.createObjectURL([...file][0])
                  : "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={({
                    currentTarget: { files },
                  }: React.ChangeEvent<HTMLInputElement>) => setFile(files)}
                  className="inputt hidden"
                />
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
