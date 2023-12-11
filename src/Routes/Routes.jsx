import { createBrowserRouter, } from "react-router-dom";
import Error from "../Error/Error";
import Home from "../Layout/Home/Home";
import Root from "../Root";
import Shop from "../Layout/Page/Shop/Shop";
import About from "../Layout/Page/About/About";
import Blog from "../Layout/Page/Blog/Blog";
import ContactUs from "../Layout/Page/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop></Shop>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
    ],
  },
]);

export default router;