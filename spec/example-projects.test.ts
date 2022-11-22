import fs from "fs";

describe("example projects", () => {
  const tailwindThemeTemplate = fs.readFileSync(
    "./theme_templates/tailwind.config.js",
    "utf8"
  );
  const muiThemeTemplate = fs.readFileSync(
    "./theme_templates/muiTheme.js",
    "utf8"
  );

  describe("next / tailwind", () => {
    it("theme config matches provided theme template", () => {
      const themeConfig = fs.readFileSync(
        "./example/project-nextjs-tailwind/styles/tailwind/tailwind.config.js",
        "utf8"
      );
      expect(themeConfig).toEqual(tailwindThemeTemplate);
    });
  });

  describe("next / mui", () => {
    it("theme config matches provided theme template", () => {
      const themeConfig = fs.readFileSync(
        "./example/project-nextjs-mui/styles/mui/muiTheme.js",
        "utf8"
      );
      expect(themeConfig).toEqual(muiThemeTemplate);
    });
  });

  describe("elixir / tailwind", () => {
    it("theme config matches provided theme template", () => {
      const themeConfig = fs.readFileSync(
        "./example/project-elixir-tailwind/assets/styles/tailwind/tailwind.config.js",
        "utf8"
      );
      expect(themeConfig).toEqual(tailwindThemeTemplate);
    });
  });
});
