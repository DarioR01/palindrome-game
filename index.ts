import express from "express";
import rootRoutes from "./src/routes/root";

const PORT = 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(rootRoutes);

app.listen(PORT, () => {
  console.log("Server", process.pid, "listening on port", PORT);
});
