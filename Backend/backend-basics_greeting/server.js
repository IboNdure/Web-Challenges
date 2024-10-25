import { createServer } from "node:http";

export const server = createServer((req, resp) => {
  resp.statusCode = 200;
  resp.end("whatsup,  [Ibo]");
});
