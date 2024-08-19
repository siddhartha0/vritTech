import { NextRouter } from "next/router";
import Router from "next-router-mock";

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    route: "",
    pathname: "",
    query: {},
    asPath: "",
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    ...router,
  };
}
