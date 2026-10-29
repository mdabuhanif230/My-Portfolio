import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SiteLoader from "../components/SiteLoader/SiteLoader";

// Pages that are not on the home screen load on demand (separate JS chunks),
// so visitors only download the code for the page they actually open.
const Projects = lazy(() => import("../pages/Projects"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));

const PageFallback = () => <SiteLoader size="lg" messages={["Loading page", "Preparing layout"]} />;

const withSuspense = (element) => <Suspense fallback={<PageFallback />}>{element}</Suspense>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: withSuspense(<Projects />),
      },
      {
        path: "/projects/:id",
        element: withSuspense(<ProjectDetails />),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
