// DataDisplay.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For matchers like .toBeInTheDocument
import DataDisplay from "../src/App";

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Hello, world!" }),
  })
);

test("renders data when fetched successfully", async () => {
  render(<DataDisplay />);

  // Check for loading state
  expect(screen.getByText(/Loading.../)).toBeInTheDocument();

  // Wait for the data to be rendered
  await waitFor(() => {
    expect(screen.getByText("Data")).toBeInTheDocument();
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});

afterEach(() => {
  jest.resetAllMocks();
});
