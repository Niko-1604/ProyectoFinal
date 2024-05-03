import { Injectable } from '@angular/core';
import { dataServices } from './dataServices';
import { DatosNomina, gestionRiegos } from './modelos/modelos';

@Injectable({
  providedIn: 'root',
})
export class ServiciosDatosService {
  constructor(private datos: dataServices) {}

  seleccionarNomina() {
    return this.datos.cargarEmpleados();
  }

  seleccionarTotalSalarios() {
    return this.datos.seleccionarTotalSalario();
  }

  guardarEmpleado(caracteristicas: DatosNomina) {
    return this.datos.guardarEmpleado(caracteristicas);
  }

  enviarGamil(asunto: string, texto: string, CorreoElectronico: string) {
    return this.datos.enviar(asunto, texto, CorreoElectronico);
  }

  guardarRiesgo(caracteristicas: gestionRiegos) {
    return this.datos.guardarRiesgo(caracteristicas);
  }
  eliminarEmpleado(EmpleadoID: any) {
    return this.datos.eliminarEmpleado(EmpleadoID);
  }

  seleccionarRiesgo() {
    return this.datos.cargarRiesgo();
  }

  seleccionarProductos() {
    return this.datos.cargarProductos();
  }

  seleccionarAlamacen() {
    return this.datos.cargarAlmacen();
  }

  seleccionarCliente() {
    return this.datos.seleccionarClientes();
  }

  seleccionarMayorSalario() {
    return this.datos.seleccionarSalarioAlto();
  }

  seleccionarMenorSalario() {
    return this.datos.seleccionarSalarioMenor();
  }
}
