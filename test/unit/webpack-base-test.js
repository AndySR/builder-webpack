const assert = require("assert");
describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base");
  console.log(baseConfig);
  it("entry", () => {
    assert.equal(
      baseConfig.output.path,
      "/Users/andysun/Desktop/webpack-study/builder-webpack/test/smoke/template/dist"
    );
  });
});
