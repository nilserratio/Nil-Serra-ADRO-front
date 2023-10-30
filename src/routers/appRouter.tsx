import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import { paths } from "../utils/paths/paths";
import {
  LazyAnimalDetailPage,
  LazyAnimalsPage,
  LazyCreateAnimalPage,
  LazyHomePage,
  LazyLoginPage,
  LazyNotFoundPage,
} from "./LazyPages";

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
        path: paths.animals,
        element: (
          <Suspense>
            <LazyAnimalsPage />
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
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
