import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import UserPage from "./components/Userpage";

type profile = {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface User {
  accountBalance: string;
  accountNumber: string;
  createdAt: Date;
  email: string;
  id: string;
  orgName: string;
  profile: profile;
  userName: string;
}

type UserState = {
  setUsers: Dispatch<SetStateAction<never[]>>
};
const setState: UserState = {
  setUsers: state => state
};
export const UserContext = createContext({ users: [], setUsers: setState.setUsers});
export const ToggleContext = createContext(false);

const Layout = () => {
  const [toggle] = useState(false);
  const [users, setUsers] = useState([]);
  const lendsqrUsers = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
  useEffect(() => {
    axios
      .get(lendsqrUsers)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, [lendsqrUsers]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <ToggleContext.Provider value={ toggle }>
        <Dashboard/>
        <Outlet />
      </ToggleContext.Provider>
    </UserContext.Provider>
  )
}

function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: "user-page",
            element: <UserPage />
          },
        ]
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
