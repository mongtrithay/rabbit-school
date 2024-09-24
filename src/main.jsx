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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
