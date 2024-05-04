import express from "express";
import citasCuentas from "./routes/citas.routes.js";
import "./config.js";
import cors from "cors";


//Importamos express
const app = express();

//Eliminar todo tipo de restrigciones, se trabaja con node con express 
app.use(cors());
app.use(express.json());

//ejecuta el archivo de rutas 
app.use(citasCuentas);

export default app;
