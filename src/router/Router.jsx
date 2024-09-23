import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import EventsNewsletter from "../pages/EventsNewsletter";
import Login from "../pages/Login";
import ControlPanel from "../pages/ControlPanel";
import VerifyEmail from "../pages/VerifyEmail";
import ProtectedRoute from "../components/Control Panel/ProtectedRoute.jsx";

// Add the basename to ensure the app is served correctly from GitHub Pages
const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about-us", element: <About /> },
        { path: "our-products", element: <Products /> },
        { path: "events-newsletter", element: <EventsNewsletter /> },
        { path: "contact-us", element: <Contact /> },
        { path: "login", element: <Login /> },
        {
          path: "control-panel",
          element: (
            <ProtectedRoute>
              <ControlPanel />
            </ProtectedRoute>
          ),
        },
        { path: "verify-email", element: <VerifyEmail /> },
      ],
    },
  ],
  {
    basename: "/nofa-egypt", // Important for GitHub Pages deployment
  }
);

export default Router;
