const express = require("express"); //inyección de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definicion del puerto de escucha
app.use("/assets", express.static(__dirname + "/public")); //contenido estatico

app.use(express.urlencoded({ extended: false})); //especifica que vamos a paresear peticiones con URLencoded payload

app.set("view engine", "ejs");

app.get("/student",(req, res) =>{
    let t = req.params.id
    res.render("student");
});

app.get("/person/:id", (req, res) =>{
    res.render("person",{Name: req.params.id, Message: req.query.message, Times: req.query.times});
});

/*
app.post("/addStudent", function(req, res){
    res.send(`Nombre: ${req.body.nombre}
              Apellido: ${req.body.edad}
              NSS: ${req.body.nss}
              Tipo de Sangre: ${req.body.tipoSangre}`);
});
*/

app.post("/addStudent", function(req, res){
    res.render("displayData",{nombre: req.body.nombre,
                              edad: req.body.edad,
                               nss: req.body.nss,
                            tipoSangre: req.body.tipoSangre });
});

app.listen(PORT);