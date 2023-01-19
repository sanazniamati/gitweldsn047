import App from "./App";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
test("Increase width render with + ", () => {
  const { getByTestId } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const widthInc = getByTestId("width-inc");
  expect(widthInc.textContent).toBe("width +");
});
