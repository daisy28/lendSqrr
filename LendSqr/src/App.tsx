import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
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
