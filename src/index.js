const express = require("express");
require("./db/mongoose");
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("Site is under maintenance! We apologize for the inconvenience caused!")
// })

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require('./models/task')

// const main = async () => {
//   const task = await Task.findById("662cd44579b18361410c2798")
//   await task.populate('owner')
//   console.log(task)
// }

// main()
