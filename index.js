const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.get("/rectangle", (req, res) => {
  res.sendFile(__dirname + "/rectangle.html");
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of Circle: ${area}</h2>`);
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const area = base * height;
  res.send(`<h2>Area of Triangle: ${area}</h2>`);
});

app.post("/rectangle", (req, res) => {
  const length = req.body.length;
  const width = req.body.width;
  const area = length * width;
  res.send(`<h2>Area of Rectangle: ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Welcome!!! Your server running at http://localhost:${PORT}`);
});
