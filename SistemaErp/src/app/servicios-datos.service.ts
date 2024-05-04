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

  seleccionarMarcas() {
    return this.datos.cargarMarcas();
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

  eliminarRiesgo(idRiesgo: any) {
    return this.datos.eliminarRiesgos(idRiesgo);
  }

  eliminarProducto(idProducto: any) {
    return this.datos.eliminarProducto(idProducto);
  }

  eliminarAlmacen(idAlmacen: any) {
    return this.datos.eliminarAlmacen(idAlmacen);
  }

  eliminarMarcas(idMarca: any) {
    return this.datos.eliminarMarcas(idMarca);
  }

  eliminarCliente(idCliente: any) {
    return this.datos.eliminarCliente(idCliente);
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
