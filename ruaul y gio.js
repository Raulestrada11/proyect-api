const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const port = 3000
let usuarios = [];
var myMap = new Map();
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
  res.send('Mi tarea')
})
app.get('/todos', (req, res) => {
  myMap.forEach(function(dato){
  	console.log(dato);
  })
  res.send("ok");
})
app.get('/obtener', (req, res) => { 
  res.send(myMap.get(req.body.id);
})
app.post('/agregar', (req, res) => {
	var datos = req.body;
	myMap.set(datos.id, [datos.id, datos.nombre, datos.telefono, datos.correo, datos.domicilio, datos.sangre]);
res.send(myMap.get(datos.id));
	});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})