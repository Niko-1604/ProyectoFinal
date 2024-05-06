import { pool } from "../Db.js";
import { transporter } from "../email.js";
import jwt from "jsonwebtoken";
export const login = async function (req, res) {
  const { usuario, contrasenia } = req.body;
  const [e] = await pool.query(
    "SELECT *  FROM login WHERE correo=? AND contra=?",
    [usuario, contrasenia]
  );

  //Esto hace la logica de los controladores para que funcione el servidor

  if (e.length <= 0) {
    res.status(401).json({ success: false, message: "Credenciales inválidas" });
  } else {
    const token = jwt.sign({ usuario }, "tu_secreto", { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.json({ success: true, token, e });
  }
};

//
export const seleccionarNomina = async function (req, res) {
  const [er] = await pool.query("SELECT * FROM nomina");

  res.send(er);
};

export const seleccionarTotalSalario = async function (req, res) {
  const [er] = await pool.query(
    "SELECT SUM(salario) AS total_salarios FROM nomina"
  );
  res.send(er);
};

export const seleccionarMayorSalario = async function (req, res) {
  const [er] = await pool.query(
    "SELECT MAX(salario) AS salario_maximo FROM nomina "
  );
  res.send(er);
};

export const seleccionarMenorSalario = async function (req, res) {
  const [er] = await pool.query(
    "SELECT MIN(salario) AS salario_menor FROM nomina"
  );
  res.send(er);
};

export const seleccionarRiesgo = async function (req, res) {
  const [er] = await pool.query("SELECT * FROM riesgos");
  res.send(er);
};

export const seleccionarProductos = async function (req, res) {
  const [er] = await pool.query("SELECT * FROM productos");
  res.send(er);
};

export const seleccionarAlmacen = async function (req, res) {
  const [er] = await pool.query("SELECT * FROM almacenes");
  res.send(er);
};

export const seleccionarClientes = async function (req, res) {
  const [er] = await pool.query("SELECT * FROM clientes");
  res.send(er);
};


export const seleccionarMarcas = async function (req, res) {
  const [er] = await pool.query("SELECT * FROM marcastecnologicas");
  res.send(er);
};


export const eniviarCorreo = async function (req, res) {
  const { asunto, texto, CorreoElectronico } = req.body;

  try {
    await transporter.sendMail({
      from: '"Proconty" <nico1612.teran@gmail.com>', // sender address
      to: CorreoElectronico, // list of receivers
      subject: asunto, // Subject line
      html: `
     <b><center> Tu tikect </center> </b><br>
     <b> ${texto} </b> <br>
     

    `,
    });
  } catch (error) {
    emailStatus = error;
  }
};


export const guardarEmpleados = async function (req, res) {
  console.log(req.body)
  const { nombre, apellido, permiso, status, salario, id } = req.body;

  if(id != 0){
    await pool.query(
      "UPDATE nomina set nombre = ?, apellido = ?, permiso = ?, status = ?, salario = ? WHERE id = ?",
      [nombre, apellido, permiso, status, salario, id]
    );
    res.send("exitoso");
  }else{
    await pool.query(
      "INSERT INTO nomina (nombre, apellido, permiso, status, salario) VALUES (?, ?, ?, ?, ?)",
      [nombre, apellido, permiso, status, salario]
    );
    res.send("exitoso");
  }
};



export const eliminarEmpleados = async function (req, res) {
  const EmpleadoID = req.params.EmpleadoID;

  await pool.execute("DELETE FROM nomina WHERE nomina.id = ?", [EmpleadoID]);

  res.send("exitoso");
};

export const gestionRiesgos = async function (req, res) {
  const { descripcion, probabilidad, impacto, medidasMitigacion, estados,id } = req.body;

  if(id != 0){
    await pool.query(
      "UPDATE riesgos set descripcion = ?, probabilidad = ?, impacto = ?, medidasMitigacion = ?, estados =? where id = ?;",
      [descripcion, probabilidad, impacto, medidasMitigacion, estados, id]
    );
    res.send("exitoso");
  }else{
    await pool.query(
      "INSERT INTO `riesgos` ( descripcion, probabilidad, impacto, medidasMitigacion, estados) VALUES ( ?, ?, ?, ?, ?);",
      [descripcion, probabilidad, impacto, medidasMitigacion, estados]
    );
    res.send("exitoso");
  }
  
};

export const eliminarRiesgo =async function(req,res){
 
  const idRiesgo = req.params.idRiesgo;
 
  await pool.execute("DELETE FROM riesgos WHERE riesgos.id = ?", [idRiesgo]);
 
  res.send("exitoso");

}

export const guardarProducto = async(req,res)=>{
  const { id, descripcionProd, marca, cantidad, precio } = req.body;

  if(id != 0){
    await pool.query(
      "UPDATE productos set descripcionProd = ?, marca = ?, cantidad = ?, precio = ? where id = ?;",
      [descripcionProd, marca, cantidad, precio, id]
    );
    res.send("exitoso");
  }else{
    await pool.query(
      "INSERT INTO `productos` ( descripcionProd, marca, cantidad, precio) VALUES ( ?, ?, ?, ?);",
      [descripcionProd, marca, cantidad, precio]);
    res.send("exitoso");
  }
}

export const eliminarProcuto = async function (req, res) {
  const idProducto = req.params.idProducto;
 
  await pool.execute("DELETE FROM productos WHERE productos.id = ?", [
    idProducto,
  ]);
 
  res.send("exitoso");
};

export const guardarAlmacen = async (req,res)=>{
  const { id, nombreAlmacen, direccion, telefono} = req.body;

  if(id != 0){
    await pool.query(
      "UPDATE almacenes set nombreAlmacen = ?, direccion = ?, telefono = ? WHERE id = ?",
      [nombreAlmacen, direccion, telefono, id]
    );
    res.send("exitoso");
  }else{
    await pool.query(
      "INSERT INTO `almacenes` ( nombreAlmacen, direccion, telefono) VALUES ( ?, ?, ?);",
      [nombreAlmacen, direccion, telefono]);
    res.send("exitoso");
  }
}

export const guardarClientes = async (req,res)=>{
  console.log(req.body);
  const { id, nombre, apellido, correo, telefono, direccion} = req.body;

  if(id != 0){
    await pool.query(
      "UPDATE clientes set nombre = ?, apellido = ?, correo = ?,  telefono = ?, direccion = ? WHERE id = ?",
      [nombre, apellido, correo, telefono, direccion, id]
    );
    res.send("exitoso");
  }else{
    await pool.query(
      "INSERT INTO `clientes` ( nombre, apellido, correo,telefono, direccion) VALUES ( ?, ?, ?,?,?);",
      [nombre, apellido, correo, telefono, direccion]);
    res.send("exitoso");
  }
}

export const eliminarAlmacen = async function (req, res) {
  const idAlmacen = req.params.idAlmacen;
 
  await pool.execute("DELETE FROM almacenes WHERE almacenes.id = ?", [
    idAlmacen,
  ]);
 
  res.send("exitoso");
};
 
export const eliminarMarcas = async function (req, res) {
  const idMarca = req.params.idMarca;
 
  await pool.execute("DELETE FROM marcastecnologicas WHERE marcastecnologicas.id = ?", [
    idMarca,
  ]);
 
  res.send("exitoso");
};
 

export const eliminarCliente = async function (req, res) {
  const idCliente = req.params.idCliente;
 
  await pool.execute("DELETE FROM clientes WHERE clientes.id= ?", [
    idCliente,
  ]);
 
  res.send("exitoso");
};
