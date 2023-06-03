import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazyHomePage = lazy(
  () => import("../pages/AnimalsPage/AnimalsPage")
);
