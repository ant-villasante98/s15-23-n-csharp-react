import Home from "@/app/page";
import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";

test("render home page", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(
    main.getByRole("link", {
      name: "Pasteleria X",
    })
  ).toBeDefined();
});
