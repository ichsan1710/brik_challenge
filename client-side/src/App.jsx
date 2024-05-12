import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import UpdateProduct from "./pages/UpdateProduct";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/edit/:id",
        element: <UpdateProduct />,
      },
    ],
    loader: () => {
      if (!localStorage.access_token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <Login />,
    path: "/",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/home");
      }
      return null;
    },
  },
  {
    element: <Register />,
    path: "/register",
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/home");
      }
      return null;
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
