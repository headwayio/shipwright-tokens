const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: __dirname + "/",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", __dirname + "/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
