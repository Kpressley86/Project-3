const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const { join } = require("path");
const morgan = require("morgan");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
  // app.use(routes);
  app.use(morgan("dev"));
app.use(express.static(join(__dirname, "build")));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.use((_, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
