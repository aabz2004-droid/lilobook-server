const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("OK");
});

app.get("/landing", (_req, res) => {
  res.json({ status: "ok", service: "lilobook-server" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
