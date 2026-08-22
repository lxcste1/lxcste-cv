import { render, screen } from "@testing-library/react";
import { cn } from "@/lib/utils";

function Hello({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

describe("smoke test", () => {
  it("renders in jsdom", () => {
    render(<Hello name="World" />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("uses jest-dom matchers", () => {
    render(<Hello name="Test" />);
    const heading = screen.getByText("Hello, Test!");
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Hello, Test!");
  });

  it("resolves @/ path alias", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });
});
