import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import Home from "./components/page/Home";
import AddCard from "./components/page/AddCard";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addCart",
          element: <AddCard />,
        },
      ],
    },
  ]);

  return (
       <RouterProvider router={router} />
  )
}

export default App