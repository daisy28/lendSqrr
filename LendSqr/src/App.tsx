import { useState, useEffect, createContext } from "react";
import axios from "axios";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import UserPage from "./components/Userpage";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

interface User {
  userName: string;
  email: string;
  phoneNumber: string;
  date: object;
  createdAt: Date;
  id: string;
  orgName: string;
  lastActiveDate: string;
}
type UserContextType = User[];
export const UserContext = createContext<UserContextType>([]);

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState<Array<User>>([])
  const getUsers = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
  useEffect(() => {
    axios
      .get(getUsers)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, [getUsers]);

  const handleToggle = ():boolean => {
    setToggle(prevToggle => !prevToggle);
    return toggle
  }

  return (
    <UserContext.Provider value={users}>
      <Dashboard
        toggle={toggle}
        handletoggle={handleToggle}
      />
      <Outlet />
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
