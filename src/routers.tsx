import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GamePage from "./Pages/GamePage";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GamePage /> },
    ],
  },
]);

export default router;
