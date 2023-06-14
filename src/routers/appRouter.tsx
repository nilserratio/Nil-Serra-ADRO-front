import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import { paths } from "../utils/paths/paths";
import {
  LazyAnimalDetailPage,
  LazyCreateAnimalPage,
  LazyHomePage,
  LazyLoginPage,
} from "./LazyPages";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: paths.root,
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
        path: paths.create,
        element: (
          <Suspense>
            <LazyCreateAnimalPage />
          </Suspense>
        ),
      },
      {
        path: paths.animalById,
        element: (
          <Suspense>
            <LazyAnimalDetailPage />
          </Suspense>
        ),
      },
      {
        path: paths.notFound,
        element: (
          <Suspense>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
