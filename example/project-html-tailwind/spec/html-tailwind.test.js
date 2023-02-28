const { getByText } = require("@testing-library/dom");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom/extend-expect");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
let dom;
let container;

describe("example project - html / tailwind", () => {
  beforeEach(() => {
    dom = new JSDOM(html);
    container = dom.window.document.body;
  });

  it("renders a header section", () => {
    const header = getByText(container, /Shipwright Tokens/);
    expect(header).toBeInTheDocument();
  });

  it("renders a typography section", () => {
    const typography = getByText(container, /Typography/);
    expect(typography).toBeInTheDocument();
  });

  it("renders a colors section", () => {
    const colors = getByText(container, /Colors/);
    expect(colors).toBeInTheDocument();
  });
});
