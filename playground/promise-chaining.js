require('../src/db/mongoose')
const Task = require("../src/models/task")

// Task.findByIdAndDelete('66214b0f5f1e1e65943af3ad').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((tasks) => {
//     console.log(tasks)
// }).catch((err) => {
//     console.log(err)
// })

const deleteAndCountTask = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteAndCountTask('6620f73abcd60644a3e69dd6').then((count) => {
    console.log(count)
}).catch((err) => console.log(err))