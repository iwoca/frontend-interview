import { render, screen, waitFor, cleanup } from "@testing-library/react";
import App from "../App";

afterAll(() => {
  cleanup;
});

describe("rendering the App", () => {
  test("renders App Components", async () => {
    render(<App />);

    //it renders header
    const headerElement = screen.getByText("Application Portal");
    expect(headerElement).toBeInTheDocument();

    //it renders loading status
    const loadingComponent = screen.queryByTestId("loading");
    expect(loadingComponent).toBeInTheDocument();

    await waitFor(() => {
      //it renders application component
      const applicationsComponent = screen.queryByTestId("applications");
      expect(applicationsComponent).toBeInTheDocument();
    });
  });
});
