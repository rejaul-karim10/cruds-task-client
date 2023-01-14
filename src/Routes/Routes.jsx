import { createBrowserRouter } from "react-router-dom";
import Form from "../components/Form";
import TableData from "../components/TableData";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/table",
        element: <TableData />,
      },
    ],
  },
]);

export default router;
