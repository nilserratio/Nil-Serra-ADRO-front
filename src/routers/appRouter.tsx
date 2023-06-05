import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import { paths } from "../utils/paths/paths";
import { LazyHomePage, LazyLoginPage } from "./LazyPages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.home} replace />,
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyHomePage />
          </Suspense>
        ),
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <p>Page not found, please try it later</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
