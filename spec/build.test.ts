import fs from "fs";
import { execSync } from "child_process";
import { shipwrightScript } from "../action-scripts/shipwright-script";
import { StyleSystems } from "../action-scripts/build-config.js";

describe("shipwright tokens action", () => {
  beforeAll(async () => {
    execSync("rm -rf build/ config.json");

    await shipwrightScript({
      figmaTokenFile: "tokens/raw/tokens.json",
      outputFolder: "build/tailwind",
      styleSystem: StyleSystems.Tailwind,
    });
  });

  afterAll(() => {
    execSync("rm -rf build/ config.json");
  });

  it("transforms tokens for style-dictionary", async () => {
    expect(fs.existsSync("./build/tailwind/style-dictionary/tokens.json")).toBe(
      true
    );
  });

  it("builds a config.js file for style-dictionary", async () => {
    expect(fs.existsSync("./config.json")).toBe(true);
  });

  it("outputs style files", async () => {
    expect(fs.existsSync("./build/tailwind/colors.json")).toBe(true);
  });

  it("outputs a theme config file", async () => {
    expect(fs.existsSync("./build/tailwind/tailwind.config.js")).toBe(true);
  });
});
