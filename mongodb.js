// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewurlParser: true},(error,client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db=client.db(databaseName)

    //insertOne and insertMany
    //findOne and findMany 
    //updateOne and updateMany
    //deleteOne and deleteMany

   db.collection('tasks').deleteOne({
    description: "Renew inspection"
   }).then((result) => {
       console.log(result)
   }).catch((error) => {
       console.log(error)
   })
 })
