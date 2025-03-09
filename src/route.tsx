import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FirstTab from "./pages/FirstTab";
import SecondTab from "./pages/SecondTab";


  const route = createBrowserRouter([
    {
      element: <Layout />, // Wraps all pages with Navbar
      children: [
        { path: "/", element: <Index /> },
        { path: "/tab1", element: <FirstTab /> },
        { path: "/tab2", element: <SecondTab /> },
      ],
    },
    { path: "*", element: <NotFound /> },


  ]);
  
  export default route;
  