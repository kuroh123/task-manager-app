const {ObjectId, MongoClient} = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log("Unable to connect to the db!")
    }

    const db = client.db(databaseName)


    // CREATE DOCUMENT
    
    // db.collection('users').insertMany([
    //     {
    //         name: "kuro",
    //         age: 3,
    //         gender: "Male"
    //     },
    //     {
    //         name: "shiro",
    //         age: 3,
    //         gender: "Male"
    //     }
    // ], (error, result) => {
    //     if(error){
    //         console.log("Unable to insert doc!")
    //     }
    //     console.log(result.ops)
    // })

    // FIND DOCUMENTS

    // db.collection('tasks').findOne({_id: new ObjectId('661ba518c358db931ac078b8')}, (error, result) =>{
    //     if(error){
    //         console.log("Unable to find doc!")
    //     }
    //     console.log(result)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, result) => {
    //     console.log(result)
    // })

    // UPDATE DOCUMENTS

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

})