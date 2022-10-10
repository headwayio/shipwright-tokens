import * as fs from "fs";
import { exec, execSync } from "child_process";


describe("npm run build", () => {
  it("outputs a scss file", async () => {
    exec("rm ./build/scss/_variables.scss");
    execSync("npm run build");

    expect(fs.existsSync("./build/scss/_variables.scss")).toBe(true);

    exec("rm -rf build/ tokens/dist");
  });
});
