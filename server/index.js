require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const allRoutes = require("./Routes/allRoutes")
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '/*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
  next();
});
// Routes
allRoutes(app);


app.use(express.static(path.join(__dirname, "public")));

// use middleware


// use routes

app.use("/public/uploads", express.static("./public/uploads"));

// database connection
const URI = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

// server running port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
