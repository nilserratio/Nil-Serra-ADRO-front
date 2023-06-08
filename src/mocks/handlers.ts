import { rest } from "msw";
import { tokenMock } from "./user/userMocks";
import { paths } from "../utils/paths/paths";
import { animalsMock } from "./animals/animalsMocks";

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
];
