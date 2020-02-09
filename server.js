import express, { urlencoded, json, static } from "express";
import { connect } from "mongoose";
import routes from "./routes";
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(urlencoded({ extended: true }));
app.use(json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
