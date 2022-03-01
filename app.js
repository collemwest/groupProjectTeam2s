const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors")

const indexRouter = require("./routes/index");
const moviesRouter = require("./routes/movies.controller");
const mOfMonthRouter = require("./routes/moviesOfTheMonth.controller");
const usersRouter = require("./routes/user.controller");
const screeningsRouter = require("./routes/screenings.controller");
const reviewRouter = require("./routes/review.controller");
const reservationRouter = require("./routes/reservation.controller");

// const whitelist = ['http://localhost:3000','http://localhost:4000/movies/create']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/movies", moviesRouter);
app.use("/moviesOfTheMonth", mOfMonthRouter);
app.use("/users", usersRouter);
app.use("/users", reviewRouter);
app.use("/screenings", screeningsRouter);
app.use("/reservations", reservationRouter);

module.exports = app;
