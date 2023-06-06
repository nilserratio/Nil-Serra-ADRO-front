import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazyHomePage = lazy(
  () => import("../pages/AnimalsPage/AnimalsPage")
);
export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);
