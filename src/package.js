var util = require("util");

navigator = {} 

var d3 = require("d3");

util.puts(JSON.stringify({
  "name": "cubism",
  "version": "1.6.0",
  "description": "A JavaScript library for time series visualization.",
  "keywords": ["time series", "visualization", "d3"],
  "homepage": "http://square.github.com/cubism/",
  "author": {"name": "Mike Bostock", "url": "http://bost.ocks.org/mike"},
  "repository": {"type": "git", "url": "http://github.com/square/cubism.git"},
  "main": "./index.js",
  "dependencies": {
    "d3": "3.x"
  },
  "devDependencies": {
    "vows": "0.6.1",
    "uglify-js": "1.2.5"
  }
}
, null, 2));
