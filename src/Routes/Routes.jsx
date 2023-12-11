import {createBrowserRouter,} from "react-router-dom";
import Error from "../Error/Error";
import Home from "../Layout/Home/Home";
import Root from "../Root";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/> ,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
      ],
    },
  ]);

  export default router;