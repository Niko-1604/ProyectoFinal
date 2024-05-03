import { pool } from "../Db.js";
import { transporter } from "../email.js";
import jwt from "jsonwebtoken";
export const login = async function (req, res) {
  const { usuario, contrasenia } = req.body;
  const [e] = await pool.query(
    "SELECT *  FROM login WHERE correo=? AND contra=?",
    [usuario, contrasenia]
  );

  if (e.length <= 0) {
    res.status(401).json({ success: false, message: "Credenciales inválidas" });
  } else {
    const token = jwt.sign({ usuario }, "tu_secreto", { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.json({ success: true, token, e });
  }
};

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
  const { nombre, apellido, permiso, status, salario } = req.body;

  await pool.query(
    "INSERT INTO nomina (nombre, apellido, permiso, status, salario) VALUES (?, ?, ?, ?, ?)",
    [nombre, apellido, permiso, status, salario]
  );
  res.send("exitoso");
};

export const eliminarEmpleados = async function (req, res) {
  const EmpleadoID = req.params.EmpleadoID;

  await pool.execute("DELETE FROM nomina WHERE nomina.id = ?", [EmpleadoID]);

  res.send("exitoso");
};

export const gestionRiesgos = async function (req, res) {
  const { descripcion, probabilidad, impacto, medidas, estado } = req.body;

  await pool.query(
    "INSERT INTO `riesgos` ( descripcion, probabilidad, impacto, medidasMitigacion, estados) VALUES ( ?, ?, ?, ?, ?);",
    [descripcion, probabilidad, impacto, medidas, estado]
  );
  res.send("exitoso");
};
