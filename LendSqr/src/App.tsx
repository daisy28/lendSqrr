import { useState, useEffect, createContext } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import UserPage from "./components/Userpage";

export interface User {
  userName: string;
  email: string;
  phoneNumber: string;
  date: object;
  createdAt: Date;
  id: string;
  orgName: string;
  lastActiveDate: string;
}
export const UserContext = createContext({ users: [], setUsers: ((state: any) => state) });
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
      <ToggleContext.Provider value={toggle}>
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
