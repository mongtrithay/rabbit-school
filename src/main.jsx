import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
import Homepage from "./pages/Home.jsx";
import Involved from "./pages/Involved.jsx";
import OurAction from "./pages/OurAction.jsx";
import SupportPage from "./pages/Support.jsx";
import Detail from "./pages/Detail.jsx";
import DetailOurAction1 from "./pages/DetailOurAction1.jsx";
import DetailOurAction2 from "./pages/DetailOurAction2.jsx";
import DetailOurAction3 from "./pages/DetailOurAction3.jsx";
import DetailOurAction4 from "./pages/DetailOurAction4.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/involved',
    element: <Involved />
  },
  {
    path: '/ouraction',
    element: <OurAction />
  },
  {
    path: '/support',
    element: <SupportPage />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/detailOurAction1',
    element: <DetailOurAction1 />
  },
  {
    path: '/detailOurAction2',
    element: <DetailOurAction2 />
  },  {
    path: '/detailOurAction3',
    element: <DetailOurAction3 />
  },  {
    path: '/detailOurAction4',
    element: <DetailOurAction4 />
  },{
    path: '/buttonDonate',
    element: <SupportPage />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
