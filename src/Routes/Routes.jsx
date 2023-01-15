import { createBrowserRouter } from "react-router-dom";
import Form from "../components/Form";
import Home from "../components/Home";
import TableData from "../components/TableData";
import UpdateEntry from "../components/UpdateEntry";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/entries",
        element: <Form />,
      },
      {
        path: "/table",
        element: <TableData />,
      },
      {
        path: "/table/update/:id",
        element: <UpdateEntry/>,
      },
    ],
  },
]);

export default router;
