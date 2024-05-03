import { Router } from "express";

import {
  eliminarEmpleados,
  eniviarCorreo,
  gestionRiesgos,
  guardarEmpleados,
  login,
  seleccionarAlmacen,
  seleccionarClientes,
  seleccionarMayorSalario,
  seleccionarMenorSalario,
  seleccionarNomina,
  seleccionarProductos,
  seleccionarRiesgo,
  seleccionarTotalSalario,
} from "../controllers/citas.controller.js";

const router = Router();
router.get("/seleccionar", seleccionarNomina);

router.get("/seleccionarTotal", seleccionarTotalSalario);
router.get("/mayorSalario", seleccionarMayorSalario);

router.get("/menorSalario", seleccionarMenorSalario);

router.get("/seleccionRiesgo", seleccionarRiesgo);

router.get("/seleccionarProductos", seleccionarProductos);

router.get("/sleccionarAlmacen", seleccionarAlmacen);
router.get("/seleccionarClientes", seleccionarClientes);

router.post("/enviarGmail", eniviarCorreo);

router.post("/guardarEmpleados", guardarEmpleados);
router.post("/guardarRiesgos", gestionRiesgos);

router.delete("/eliminarEmpleados/:EmpleadoID", eliminarEmpleados);
router.post("/login", login);
export default router;
