const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const session = require("express-session")
const cors = require("cors")
const cookie = require('cookie-parser')
//const NewUser = require("./components/NewUser")
const Datastore = require('nedb')
app.use(express.static('static'))
app.use(express.json())
app.use(cors())
app.use(cookie())
app.use(express.static("dist"))

// baza danych
let baza = new Datastore({
    filename: "bazka.db",
    autoload: true,
})

//* sesja
app.use(
    session({
        secret: "sneak100",
        saveUninitialized: true,
        resave: true,
    })
);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))
})
app.get("/helper", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))
})
app.get("/game", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/gra.html"))
})
app.get("/porownywarka", function (req, res) {

    baza.find({
        nick: req.session.nick,
    },
        function (error, docs) {
            console.log(docs)

            res.end(JSON.stringify(docs))
        })

}
)
app.post("/nick", function (req, res) {
    console.log(req.body)
    req.session.nick = req.body.nick
    res.end()
})
app.post("/colors", function (req, res) {
    console.log(req.body)

})
app.post("/gra", function (req, res) {

    console.log(req.session.nick)
    let pom = {
        nick: req.session.nick,
        ustawienie: req.body.data,
    }
    baza.insert(pom, function (error, data) {

    })
    res.end()
})
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
// dsadsa