const express = require ("express");
const morgan = require("morgan");
const app = express();

//Settings

app.set("appQL", "Set my");
app.set("port", 3000);
app.set("view engine", "ejs");

/* function logger (req, res, next) {
    console.log(`Ruta recibida ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
} */

//Middlewares
app.use(express.json());
app.use(morgan("dev"))

/* app.all ('/user', (req, res, next) => {
    console.log("Por aqui pasa");
    //res.send("terminado");
    next();
}) */

//Routes

app.get("/", (req, res) => {
    const data = [{name: "Orson"}, {name: "Lupita"}, {name: "Alexis"}, {name: "Teresa"}];
    res.render("index.ejs", {people: data})
})

app.get("/user", (req, res) => {
    res.json({username: "Elsa",
            lastName: "Porrico"
});
})

app.post("/user/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send("Post request received");
})

app.put("/user/:id", (req, res) => {
    console.log(req.body)
    res.send(`User  ${req.params.id} Updated`);
})

app.delete("/user/:userId", (req, res) => {
    res.send(`User ${req.params.userId} deleted`);
})

app.use(express.static("public"))



app.listen (app.get("port"), () => {
    console.log(app.get("appQL"))
    console.log("Server on port", app.get("port"))

})



/* var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
}) */