import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/Userdetails";
import UserPage from "./components/Userpage";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = ():boolean => {
    setToggle(prevToggle => {return !prevToggle});
    return toggle
  }
  return (
    <>
      <Dashboard
        toggle={toggle}
        handletoggle={handleToggle}
      />
      <Outlet />
    </>
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
            element: <UserDetails />
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
