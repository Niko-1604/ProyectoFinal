import { Component } from '@angular/core';
import { ServiciosDatosService } from '../servicios-datos.service';
import { Cliente } from '../modelos/modelos';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent {
  
  userRol: number = 0;
  constructor(private datos: ServiciosDatosService) {
    this.userRol = Number(localStorage.getItem('rol'));
  }
  arrayCliente: any[] = [];

  cliente: Cliente = {
    id: 0,
    apellido:"",
    correo:"",
    direccion:"",
    nombre:"",
    telefono:""
  }

  asunto: string = '';
  texto: string = '';
  obtenerCorreo: string = '';
  ngOnInit(): void {
    this.nomina();
  }
  private nomina() {
    this.datos.seleccionarCliente().subscribe((cliente) => {
      this.arrayCliente = Object.values(cliente);
    });
  }

  obtenerCorreoo(core: any) {
    this.obtenerCorreo = core;
    console.log(this.obtenerCorreo);
  }
  enviar() {
    this.datos
      .enviarGamil(this.asunto, this.texto, this.obtenerCorreo)
      .subscribe(
        (res) => {
          console.log(res);
          alert('Hemos envidao tu informacion al correo ');
          location.reload();
        },
        (err) => {
          console.log(err);
          alert('Correcto');
          location.reload();
        }
      );
  }

  eliminarCliente(idCliente: any): void {
    this.datos.eliminarCliente(idCliente).subscribe(
      (response) => {
        console.log('exito', response);
      },
      (error) => {
        location.reload();
        // Manejar errores aquí...
      }
    );
  }

  seleccionarCliente(idCliente: any): void {
    console.log(idCliente)
    const cliente = this.arrayCliente.find((cliente) => cliente.id === idCliente)
    console.log(cliente);
    this.cliente = cliente
    this.cliente.id = idCliente
  }

  guardarCliente():void{
    this.datos.guardarCliente(this.cliente).subscribe(
      (response) => {
        console.log('exito', response);
      },
      (error) => {
        location.reload();
        // Manejar errores aquí...
      }
    );
  }

}
