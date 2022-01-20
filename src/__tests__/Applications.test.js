import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import Applications from "../applications/Applications";

afterAll(() => {
  cleanup;
});

describe("Render and load more Applications", () => {
  render(<Applications />);

  test("successfully loads more data on button click", async () => {
    const loadingElement = await screen.queryByTestId("loading");
    expect(loadingElement).toHaveTextContent("Loading page 1...");

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    await waitFor(() => {
      //it loads applications
      const singeApplicationElement = screen.queryByTestId("singleApplication");

      //it updates loading text to next page on button click
      expect(loadingElement).toHaveTextContent("Loading page 2...");

      //it hides application content on button click
      expect(singeApplicationElement).not.toBeInTheDocument();
    });
  });
});
