const fs = require("fs");
const { exec, execSync } = require("child_process");


describe("npm run build", () => {
  it("outputs a scss file", async () => {
    exec("rm -rf ./build");
    execSync("npx token-transformer tokens/raw/tokens.json tokens/transformed/tokens.json");
    execSync("node build.js");

    expect(fs.existsSync("./build/tailwind/colors.json")).toBe(true);

    exec("rm -rf build/ tokens/transformed");
  });
});
