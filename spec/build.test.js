import * as fs from "fs";
import { exec, execSync } from "child_process";

describe("npm run build", () => {
  it("outputs a scss file", async () => {
    execSync("node configs/build-config.js build/test");
    execSync("npx token-transformer tokens/src/tokens.json tokens/dist/tokens.json");
    execSync("style-dictionary build --config configs/config.json");

    expect(fs.existsSync("./build/test/scss/_variables.scss")).toBe(true);

    exec("rm -rf build/ tokens/dist configs/config.json");
  });
});
