import * as fs from "fs";
import { exec, execSync } from "child_process";


describe("npm run build", () => {
  afterEach(() => {
    exec("git restore ./build ./tokens");
  });

  it("outputs a scss file", async () => {
    execSync("npm run build");

    expect(fs.existsSync("./build/scss/_variables.scss")).toBe(true);
  });
});
