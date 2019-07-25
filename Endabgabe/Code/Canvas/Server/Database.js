"use strict";
/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "test";
let db;
let players;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    // databaseURL = "mongodb+srv://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://spieler:gameover@cluster0-2bjva.mongodb.net/Punkteliste";
    databaseName = "Punkteliste";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        players = db.collection("spieler");
    }
}
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    players.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = players.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, playerArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(playerArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map