const express = require("express");
const currenciesRouter = require("./routes/currencies.route");
const usersRouter = require("./routes/users.route");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Currency Database</h1>");
});

// Routes
app.use("/v2/currencies", currenciesRouter);
app.use("/v2/users", usersRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
