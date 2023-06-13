import { rest } from "msw";
import { tokenMock } from "./user/userMocks";
import { paths } from "../utils/paths/paths";
import { animalsMock, animalsPaginationMock } from "./animals/animalsMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.animals}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ animals: animalsMock }));
  }),

  rest.delete(
    `${apiUrl}${paths.animals}/${animalsMock[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(200));
    }
  ),

  rest.post(`${apiUrl}${paths.animals}/create`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ animal: animalsMock[0] }));
  }),

  rest.get(`${apiUrl}${paths.animals}/:idAnimal`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ animalById: animalsMock[0] }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.user}${paths.login}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${paths.animals}`, (_req, res, ctx) => {
    return res(ctx.status(500));
  }),

  rest.delete(
    `${apiUrl}${paths.animals}/${animalsMock[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),

  rest.post(`${apiUrl}${paths.animals}/create`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),

  rest.get(
    `${apiUrl}${paths.animals}/${animalsMock[0].id}`,
    (_req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
];

export const paginationHandlers = [
  rest.get(`${apiUrl}${paths.animals}`, (req, res, ctx) => {
    const searchParams = req.url.searchParams;
    searchParams.set("skip", "0");
    searchParams.set("limit", "6");

    return res(
      ctx.status(200),
      ctx.json({
        animals: animalsPaginationMock,
        totalAnimals: animalsPaginationMock.length,
      })
    );
  }),
];
