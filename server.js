const express         = require("express");
const path            = require("path");
const bodyParser      = require("body-parser");
const validator       = require("express-validator")
const routes          = require("./routes/index.js");
const n64Routes       = require("./routes/n64.js");
const snesRoutes      = require("./routes/snes.js");
const nesRoutes       = require("./routes/nes.js");
const morgan          = require("morgan");

// Initialze Express App
const app = express();

// Set Port
app.set('port', (process.env.PORT || 3000));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

// morgan
app.use(morgan("dev"));

// Routes
app.use(routes);
app.use("/api/n64", n64Routes);
app.use("/api/snes", snesRoutes);
app.use("/api/nes", nesRoutes);

// Open Port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
