const assert = require("assert");
describe("webpack.base.js test case", () => {
  const baseConfig = require("../../lib/webpack.base");
  console.log(baseConfig);
  it("entry", () => {
    assert.equal(baseConfig.entry.index, "");
  });
});
