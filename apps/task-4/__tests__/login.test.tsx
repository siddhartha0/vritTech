import Home from "@/app/page";
import { render } from "@testing-library/react";
import Cookies from "js-cookie";

jest.mock("js-cookie", () => ({
  set: jest.fn(),
}));

describe("Login Page", () => {
  it("should redirect to Landing page if not logged in", async () => {
    (Cookies.set as jest.Mock).mockImplementation(() => {});

    render(<Home />);
  });
});
