const fs = require("fs");

const version = Date.now(); // or git commit hash if you want

let html = fs.readFileSync("index.html", "utf8");

// replace links with cache-busted versions
html = html.replace(/style\.css(\?v=\d+)?/g, `style.css?v=${version}`);
html = html.replace(/script\.js(\?v=\d+)?/g, `script.js?v=${version}`);

fs.writeFileSync("index.html", html);

console.log("Built with version:", version);