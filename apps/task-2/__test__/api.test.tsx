import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "../src/components";
import App from "../src/App";

global.fetch = jest.fn();
const mockUsers = [
  {
    firstName: "xinu",
    lastName: "sid",
    username: "xinu sid",
    age: "23",
    email: "sid@gmail.com",
    phone: "66965496",
  },
];

beforeEach(() => {
  (global.fetch as jest.Mock).mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockUsers),
    })
  );
});

test("shows loading state", async () => {
  (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));

  render(<App />);

  const loadingText = await screen.findByText(/Loading.../i);
  expect(loadingText).toBeInTheDocument();
});

test("renders table with user data", async () => {
  render(<Table userList={mockUsers} />);

  const tableElements = screen.getAllByText(/xinu/i);
  expect(tableElements[0]).toBeInTheDocument();

  const tableEmailElements = screen.getAllByText(/sid@gmail.com/i);
  expect(tableEmailElements[0]).toBeInTheDocument();
});
