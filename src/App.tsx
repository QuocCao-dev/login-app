import Dashboard from "./components/Dashboard";
import { LoginForm } from "./components/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Table from "./components/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
