import { server } from "./server.js";
const port = 800;
server.listen(port, () => {
  console.log(`Server rennt unter http://localhost:${port}`);
});
