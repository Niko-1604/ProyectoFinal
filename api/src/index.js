import app from "../src/app.js";
import { PORT } from "./config.js";

//nos permite ejecutar el servidor
app.listen(PORT);
console.log(`sever port ${PORT}`);
