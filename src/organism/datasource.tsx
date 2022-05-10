import { GridRenderCellParams } from "@mui/x-data-grid";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//temporary

export const userRow = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?cs=srgb&dl=pexels-deepanker-verma-1482061.jpg&fm=jpg",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/5387168/pexels-photo-5387168.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5387168.jpg&fm=jpg",
    status: "pending",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1035103/pexels-photo-1035103.jpeg?cs=srgb&dl=pexels-samer-daboul-1035103.jpg&fm=jpg",
    status: "active",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1826060/pexels-photo-1826060.jpeg?cs=srgb&dl=pexels-vanderlei-longo-1826060.jpg&fm=jpg",
    status: "passive",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/5077069/pexels-photo-5077069.jpeg?cs=srgb&dl=pexels-cottonbro-5077069.jpg&fm=jpg",
    status: "active",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?cs=srgb&dl=pexels-cottonbro-5082580.jpg&fm=jpg",
    status: "passive",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/5077066/pexels-photo-5077066.jpeg?cs=srgb&dl=pexels-cottonbro-5077066.jpg&fm=jpg",
    status: "active",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/5054530/pexels-photo-5054530.jpeg?cs=srgb&dl=pexels-cottonbro-5054530.jpg&fm=jpg",
    status: "pending",
    email: "1snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    username: "Roxxie",
    img: "https://images.pexels.com/photos/5054532/pexels-photo-5054532.jpeg?cs=srgb&dl=pexels-cottonbro-5054532.jpg&fm=jpg",
    status: "active",
    email: "snow@gmail.com",
    age: 65,
  },
];
