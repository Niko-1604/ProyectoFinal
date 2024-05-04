import { Component } from '@angular/core';
import { ServiciosDatosService } from '../servicios-datos.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent {
  constructor(private datos: ServiciosDatosService) {}
  arrayCliente: any[] = [];

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

}
