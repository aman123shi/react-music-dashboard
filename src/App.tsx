import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Home } from "./pages/home/Home";
import { Songs } from "./pages/songs/Songs";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/songs", element: <Songs /> },
        { path: "*", element: <Navigate to={"/"} /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
