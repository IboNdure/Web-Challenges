import { createServer } from "node:http";

export const server = createServer((req, resp) => {
  if (req.url === "/api/fish/1") {
    resp.statusCode = 200;
    resp.end("Shrimp");
  } else if (req.url == "/api/fish/2") {
    resp.statusCode = 200;
    resp.end("Anemonenfish");
  } else {
    resp.statusCode = 404;
    resp.end("Sieht gut aus");
  }
});
