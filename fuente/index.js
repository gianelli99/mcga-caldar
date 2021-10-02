const express = require('express');
const { json } = require('body-parser');

const routerCalderas = require('./rutas/calderas.rutas');
const routerEdificios = require('./rutas/edificios.rutas');
const routerConstructoras = require('./rutas/constructoras.rutas');
const routerTecnicos = require('./rutas/tecnicos.rutas');
const routerMantenimientos = require('./rutas/mantenimientos.rutas');
const routerClientes = require('./rutas/clientes.rutas');
require('dotenv').config();
const { conectarBD } = require('./basededatos/configuracion');

const port = process.env.PORT;
const app = express();

app.use(json());

app.use('/tecnicos', routerTecnicos);
app.use('/calderas', routerCalderas);
app.use('/edificios', routerEdificios);
app.use('/constructoras', routerConstructoras);
app.use('/mantenimientos', routerMantenimientos);
app.use('/clientes', routerClientes);

app.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor corriendo en http://localhost:${port}`);
  await conectarBD();
});
