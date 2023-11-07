import app from "./app";
import errorHandler = require("errorhandler");

// error hanlder
process.env.NODE_ENV === "development" ? errorHandler() : null;

// starting node server
const server = app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log(" Press CTRL-C to stop\n");
});


export default server;