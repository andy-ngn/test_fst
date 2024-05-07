import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "../client/dist")));

// any route except for /api/* will server an html file located in ../client/dist/index.html
app.get(/^(?!\/api).*/, (req, res) => {
  return res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/api/hello", (req, res) => {
  return res.json({ message: "Hello from server!" });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
