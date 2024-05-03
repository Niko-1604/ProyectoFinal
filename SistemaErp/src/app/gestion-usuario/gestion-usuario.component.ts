import { Component } from '@angular/core';
import { ServiciosDatosService } from '../servicios-datos.service';
import { DatosNomina } from '../modelos/modelos'; // Importa la clase DatosNomina

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css'],
})
export class GestionUsuarioComponent {
  arrayNomina: any[] = [];
  constructor(private datos: ServiciosDatosService) {}

  datosNomina: DatosNomina = {
    nombre: '',
    apellido: '',
    permiso: false,
    status: '',
    salario: 0,
  };

  ngOnInit(): void {
    this.nomina();
  }
  private nomina() {
    this.datos.seleccionarNomina().subscribe((nomina) => {
      this.arrayNomina = Object.values(nomina);
      console.log(this.arrayNomina);
    });
  }

  agregarEmpleado() {
    console.log(this.datosNomina);
    this.datos.guardarEmpleado(this.datosNomina).subscribe(
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

  eliminarServico(ServicioID: any): void {
    this.datos.eliminarEmpleado(ServicioID).subscribe(
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
