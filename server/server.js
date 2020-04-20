const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const feedbackRouter = require("./routes/feedback.router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build"));

app.use("/feedback", feedbackRouter);

app.use("/*", (req, res) => {
  console.log("Hello!");
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
