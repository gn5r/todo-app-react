import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App.tsx", () => {
  it("描画できること", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
