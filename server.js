const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js + Docker + Jenkins 🚀");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
