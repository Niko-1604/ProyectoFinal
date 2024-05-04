//libreria de node para poder trabajr con los servidores de google
//para poder enviar correos 
import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "nico1612.teran@gmail.com",
    pass: "gfgy vjph spmn aojl",
  },
});

transporter.verify().then(() => {
  console.log("REady for send emails");
});
