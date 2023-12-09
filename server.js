// IMPORTS MODULES TO BE USED

import config from "./config/config.js"; // database configuration and server port
import app from "./server/express.js"; // express server + routes
import mongoose from "mongoose"; // database

// CONNECTS TO DATABASE

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Connected to the database!");
  });

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

/*
app.get("/", (req, res) => {
res.json({ message: "Welcome to User application." });
});
*/

// STARTS EXPRESS SERVER

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
