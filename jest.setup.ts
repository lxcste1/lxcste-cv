import "@testing-library/jest-dom";

jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "mock-font-inter", variable: "--mock-font-inter" }),
  Geist: () => ({ className: "mock-font-geist", variable: "--mock-font-geist" }),
  Geist_Mono: () => ({ className: "mock-font-geist-mono", variable: "--mock-font-geist-mono" }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { priority, ...rest } = props;
    return { type: "img", props: rest };
  },
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

jest.mock("lucide-react", () => {
  const actual = jest.requireActual("lucide-react");
  const handler: ProxyHandler<typeof actual> = {
    get: (_target, prop: string) => {
      if (prop === "$$typeof" || prop === "toString" || prop === "then") {
        return undefined;
      }
      return (props: Record<string, unknown>) => ({
        type: "span",
        props: { ...props, "data-icon": prop },
      });
    },
  };
  return new Proxy(actual, handler);
});

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn(), themes: [] }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));
