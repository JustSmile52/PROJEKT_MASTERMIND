const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const path = require("path")
const session = require("express-session")
const cors = require("cors")
const cookie = require('cookie-parser')
const color = kolor()

let global_nick = null
let global_win = false

//const NewUser = require("./components/NewUser")
const Datastore = require('nedb');
const { parse } = require("path");
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
app.get("/global", function (req, res) {
    if (global_win == true) {
        let pom = {
            wygrana: global_win,
            nick: global_nick
        }
        res.end(JSON.stringify(pom))
    }
    else {
        res.end(JSON.stringify({
            wygrana: global_win,
            nick: global_nick
        }))
    }
})
app.get("/helper", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/register.html"))
})
app.get("/game", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/gra.html"))
})
app.get("/porownywarka", function (req, res) {
    console.log(req.session.nick, req.session.tura)
    baza.find({
        nick: req.session.nick,
        tura: req.session.tura
    },
        function (error, docs) {

            const licznik = porownywarka(docs[0].ustawienie)

            res.end(licznik.toString())

        })

})
app.post("/nick", function (req, res) {
    console.log(req.body)
    req.session.nick = req.body.nick
    res.end()
})

app.post("/gra", function (req, res) {
    req.session.tura = req.body.tura
    let pom = {
        nick: req.session.nick,
        ustawienie: req.body.data,
        tura: req.body.tura,
    }
    baza.insert(pom, function (error, data) {

    })

    res.end()
})

app.post("/wygrana", function (req, res) {
    console.log(req.body.wygranko)
    req.session.wygranko = req.body.wygranko
    let wygranko = req.session.wygranko

    if (wygranko == true) {
        global_win = true
        global_nick = req.session.nick

    }
    console.log("cons wygrana" + wygranko)

    res.end()
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
// dsadsa

function kolor() {
    let kolorki = []
    for (i = 0; i < 4; i++) {
        kolorki[i] = Math.floor(Math.random() * 5)

    }
    console.log(kolorki)

    return kolorki
}

function porownywarka(dane) {

    console.log(dane, color)
    let licznik = 0
    for (let i = 0; i < 4; i++) {
        if (color[i] == parseInt(dane[i])) {
            licznik++
        }
    }
    return licznik
}