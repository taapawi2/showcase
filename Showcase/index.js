const http = require("http");
const appInsights = require("applicationinsights");

appInsights.setup("27d76a91-d680-46b7-8031-97bfa40b160e");
appInsights.defaultClient.context.tags[
  appInsights.defaultClient.context.keys.cloudRole
] = "DemoApplication";
appInsights.start();

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
