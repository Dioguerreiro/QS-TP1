module.exports = {
  testEnvironment: "node",
  testMatch: ["**__/tests/__**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "coverage",
};
