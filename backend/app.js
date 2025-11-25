const express = require("express");
const cors = require("cors");
const submitProjectRouter = require("./routes/submitProject.routes");
const homeRouter = require("./routes/home.routes");
const otpRouter = require("./routes/otp.routes");
const contactRouter = require("./routes/contact.routes");
const newsLetterRouter = require("./routes/newsLetter.routes");
const scheduleCallRouter = require("./routes/scheduleCall.routes");
const adminRouter = require("./routes/admin.routes");

const app = express();

app.use(
  cors({
    origin: ["https://agency.beyondman.dev", "http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE,PATCH",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/", otpRouter);
app.use("/", submitProjectRouter);
app.use("/", contactRouter);
app.use("/", newsLetterRouter);
app.use("/", scheduleCallRouter);
app.use("/admin", adminRouter);

module.exports = app;
