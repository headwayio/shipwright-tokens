import fs from "fs";
import { execSync } from "child_process";

describe("shipwright tokens action", () => {
  const shipwrightCommand =
    "node main.js tokens/raw/tokens.json build/tailwind tailwind";

  beforeEach(() => {
    execSync("rm -rf build/ config.json");
  });

  afterEach(() => {
    execSync("rm -rf build/ config.json");
  });

  it("transforms tokens for style-dictionary", async () => {
    execSync(`${shipwrightCommand}`);
    expect(fs.existsSync("./build/tailwind/style-dictionary/tokens.json")).toBe(
      true
    );
  });

  it("builds a config.js file for style-dictionary", async () => {
    execSync(`${shipwrightCommand}`);
    expect(fs.existsSync("./config.json")).toBe(true);
  });

  it("outputs style files", async () => {
    execSync(`${shipwrightCommand}`);
    expect(fs.existsSync("./build/tailwind/colors.json")).toBe(true);
  });

  it("outputs a theme config file", async () => {
    execSync(`${shipwrightCommand}`);
    expect(fs.existsSync("./build/tailwind/tailwind.config.js")).toBe(true);
  });
});
