import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyHomePage = lazy(
  () => import("../pages/AnimalsPage/AnimalsPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyCreateAnimalPage = lazy(
  () => import("../pages/CreateAnimalPage/CreateAnimalPage")
);

export const LazyAnimalDetailPage = lazy(
  () => import("../pages/AnimalDetailPage/AnimalDetailPage")
);
