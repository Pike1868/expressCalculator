const express = require("express");
const ExpressError = require("./expressError");
const path = require("path");
const calcOperations = require("./calcOperations");

const app = express();
const co = new calcOperations();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.get("/operations/:operation", (req, res, next) => {
  try {
    const userQuery = req.query;
    const userParam = req.params.operation;
    // check if operation exists
    if (co[userParam]) {
      let result = co[`${userParam}`](userQuery);
      res.json({ operation: userParam, value: result });
    } else {
      throw new ExpressError(`Operation '${userParam}' not supported`, 400);
    }
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error("Error:", error);
  let statusCode = error.status || 500;
  let errorMessage = error.message || "Internal server error";

  res.status(error.status);
  return res.json({
    status: statusCode,
    message: errorMessage,
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
