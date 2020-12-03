const path = require("path");
const webpack = require("webpack");
const rimraf = require("rimraf");
const Mocha = require("mocha");
const mocha = new Mocha({
  timeout: "10000ms",
});
process.chdir(__dirname, "template");
rimraf("./dist", () => {
  const prodConfig = require("../../lib/webpack.prod");
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })
    );
    console.log("\n" + "Compiler success, begin to run test");
    mocha.addFile(path.join(__dirname, "html-test.js"));
    mocha.addFile(path.join(__dirname, "css-js-test.js"));
    mocha.run();
  });
});
