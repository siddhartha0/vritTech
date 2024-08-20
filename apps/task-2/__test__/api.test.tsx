import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Table } from "../src/components";

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

describe("Table component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays loading state initially", () => {
    (fetch as jest.Mock).mockReturnValueOnce(new Promise(() => {}));
    render(<Table userList={mockUsers} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays users when data is fetched successfully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    render(<Table userList={mockUsers} />);

    await waitFor(() => expect(screen.getByText(/xinu/i)).toBeInTheDocument());
    expect(screen.getByText(/sid/i)).toBeInTheDocument();
    expect(screen.getByText(/sid@gmail.com/i)).toBeInTheDocument();
  });

  it("displays error message when fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<Table userList={mockUsers} />);

    await waitFor(() =>
      expect(screen.getByText(/Error:/i)).toBeInTheDocument()
    );
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });
});
