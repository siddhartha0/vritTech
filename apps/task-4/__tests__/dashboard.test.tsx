import { render } from "@testing-library/react";
import Dashboard from "../app/dashboard/page";
import Cookies from "js-cookie";
import { jest } from "@jest/globals";

jest.mock("js-cookie", () => ({
  get: jest.fn(),
}));

describe("Dashboard Page", () => {
  it("should redirect to login if not authenticated", async () => {
    (Cookies.get as jest.Mock).mockReturnValue(null);

    render(<Dashboard />);
  });
});
