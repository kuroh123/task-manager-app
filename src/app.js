const express = require("express");
require("./db/mongoose");
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance! We apologize for the inconvenience caused!")
// })
app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

module.exports = app