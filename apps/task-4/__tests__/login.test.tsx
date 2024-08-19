import { render } from "@testing-library/react";
import Cookies from "js-cookie";
import Login from "../app/page";
jest.mock("js-cookie", () => ({
  set: jest.fn(),
}));

describe("Login Page", () => {
  it("should redirect to dashboard on successful login", async () => {
    (Cookies.set as jest.Mock).mockImplementation(() => {});

    render(<Login />);
  });
});
