const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const session = require("express-session")
//const NewUser = require("./components/NewUser")

app.use(express.static('static'))
app.use(express.json())

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
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})