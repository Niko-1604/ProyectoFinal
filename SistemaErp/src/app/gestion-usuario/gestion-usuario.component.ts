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
  //copiar linea 12 y 14
  userRol: number = 0;
  constructor(private datos: ServiciosDatosService) {
    this.userRol = Number(localStorage.getItem('rol'));
  }

  datosNomina: DatosNomina = {
    nombre: '',
    apellido: '',
    permiso: false,
    status: '',
    salario: 0,
    id: 0
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
        this.datosNomina = {
          nombre: '',
          apellido: '',
          permiso: false,
          status: '',
          salario: 0,
          id: 0
        };
      
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


  seleccionarEmpleado(EmpleadoID: any):void{
    console.log(EmpleadoID)
      const empleado = this.arrayNomina.find((empleado)=> empleado.id === EmpleadoID)
      console.log(empleado);
      this.datosNomina = empleado
      this.datosNomina.id = EmpleadoID
  }

}
