import { Router } from "express";

import {
  eliminarAlmacen,
  eliminarCliente,
  eliminarEmpleados,
  eliminarMarcas,
  eliminarProcuto,
  eliminarRiesgo,
  eniviarCorreo,
  gestionRiesgos,
  guardarEmpleados,
  login,
  seleccionarAlmacen,
  seleccionarClientes,
  seleccionarMarcas,
  seleccionarMayorSalario,
  seleccionarMenorSalario,
  seleccionarNomina,
  seleccionarProductos,
  seleccionarRiesgo,
  seleccionarTotalSalario,
  guardarProducto,
  guardarAlmacen,
  guardarClientes
} from "../controllers/citas.controller.js";

//Nos ayuda a poner las rutas a redireccionar las funciones

const router = Router();
router.get("/seleccionar", seleccionarNomina);

router.get("/seleccionarTotal", seleccionarTotalSalario);
router.get("/mayorSalario", seleccionarMayorSalario);

router.get("/menorSalario", seleccionarMenorSalario);

router.get("/seleccionRiesgo", seleccionarRiesgo);

router.get("/seleccionarProductos", seleccionarProductos);

router.get("/sleccionarAlmacen", seleccionarAlmacen);
router.get("/seleccionarClientes", seleccionarClientes);
router.get("/seleccionarMarcas", seleccionarMarcas);


router.post("/enviarGmail", eniviarCorreo);
router.post("/guardarEmpleados", guardarEmpleados);
router.post("/guardarRiesgos", gestionRiesgos);


router.delete("/eliminarRiesgos/:idRiesgo", eliminarRiesgo);

router.delete("/eliminarAlmacen/:idAlmacen", eliminarAlmacen);
router.delete("/eliminarMarcas/:idMarca", eliminarMarcas);

//Clientes
router.post("/guardarCliente",guardarClientes);
router.delete("/eliminarCliente/:idCliente", eliminarCliente);

//Empleados
router.post("/guardarEmpleados", guardarEmpleados);
router.delete("/eliminarEmpleados/:EmpleadoID", eliminarEmpleados);

//Productos
router.post("/guardarProducto",guardarProducto);
router.delete("/eliminarProducto/:idProducto", eliminarProcuto);

//Almacenes
router.post("/guardarAlmacen",guardarAlmacen);
router.delete("/eliminarAlmacen/:idAlmacen", eliminarAlmacen);

router.post("/login", login);
export default router;

