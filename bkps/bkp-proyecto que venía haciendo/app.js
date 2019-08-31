const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

// Creamos una aplicación y la guardamos en una constante para correr express como una función
const app = express();

// Utilizamos body-parser para parsear la información de los request.
app.use(bodyParser.urlencoded({ extended: false}));

// Servimos los archivos estaticos a la carpeta public
app.use(express.static(path.join(__dirname,'public')));

// Seteo con que template quiero trabajar
app.set('view engine', 'pug');
//app.set('view engine', 'handlebars');
//app.set('view engine', 'ejs');

// Rutas
app.use('/admin',adminData.routes);
app.use('/shop',shopRoutes);

app.get("/", (req,res,next) =>{
    res.send('<h1>Bienvenido!</h1>');
});

// Pagina 404.
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Le tenemos que decir que escuche, los request entrantes, en un puerto determinado
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto: 3000");
});
