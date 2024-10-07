import express from "express";
import rootRoutes from "./src/routes/root";
import { handleError } from "./src/utils/error";

const PORT = 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(rootRoutes);
app.use(handleError);

const server = app.listen(PORT, () => {
  console.log("Server", process.pid, "listening on port", PORT);
});

export const closeServer = () => {
  if (server) {
    return new Promise((resolve) => {
      server.close(resolve);
    });
  }
};

export default app;
