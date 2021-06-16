const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const session = require("express-session")
const cors = require("cors")
// const mongoClient = require('mongodb').MongoClient
// const ObjectID = require('mongodb').ObjectID;

//const NewUser = require("./components/NewUser")

app.use(express.static('static'))
app.use(express.json())
app.use(cors())

//* sesja
app.use(
    session({
        secret: "sneak100",
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1000 * 60 * 10,
        },
    })
);


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))
})
app.get("/helper", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))
})
app.post("/nick", function (req, res) {
    console.log(req.body)

})
app.post("/colors", function (req, res) {
    console.log(req.body)

})
app.post("/gra", function (req, res) {
    console.log(req.body.data);
    res.end()
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})