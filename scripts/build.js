"use strict";
/* eslint-env node */

const sh = require("shelljs");
const join = require("path").join;
sh.config.fatal = true;
sh.cd(join(__dirname, ".."));

sh.echo("cleaning...");
sh.rm("-rf", "./dist");
sh.rm("-rf", "./website/bin");
sh.mkdir("-p", "./dist");
sh.mkdir("-p", "./website/bin");

sh.echo("bundling dist...");
sh.exec("rollup -c ./scripts/rollup.config.js");

sh.echo("bundling website...");
sh.exec("NODE_ENV=production rollup -c ./scripts/rollup.website.config.js");

sh.echo("pre-rendering website...");
sh.exec("node scripts/prerender-website");
