const fs = require("fs");
const { exec, execSync } = require("child_process");


describe("shipwright tokens action", () => {
  it("outputs style files", async () => {
    exec("rm -rf build/ tokens/transformed config.json");

    execSync("node build-config.js build/tailwind tokens/transformed");
    execSync("npx token-transformer tokens/raw/tokens.json tokens/transformed/tokens.json");
    execSync("node build.js");

    expect(fs.existsSync("./build/tailwind/colors.json")).toBe(true);

    exec("rm -rf build/ tokens/transformed config.json");
  });
});
