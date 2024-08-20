import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "../src/components";

const users = [
  {
    firstName: "xinu",
    lastName: "sid",
    username: "xinu sid",
    age: "23",
    email: "sid@gmail.com",
    phone: "66965496",
  },
];

it("tests if the table renders the users", () => {
  render(<Table userList={users} />);
  const tableElements = screen.getAllByText(/xinu/i);
  expect(tableElements[0]).toBeInTheDocument();
});

it("tests if the table renders the users", () => {
  render(<Table userList={users} />);
  const tableElements = screen.getAllByText(/xinu sid/i);
  expect(tableElements[0]).toBeInTheDocument();
});
