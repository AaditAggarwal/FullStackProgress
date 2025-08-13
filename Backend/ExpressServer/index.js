import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Youkoso!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Ore wa Aaditto desu!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>P:945-900-XXXX</h1>");
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
