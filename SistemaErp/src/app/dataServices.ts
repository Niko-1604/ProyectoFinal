import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosNomina, gestionRiegos } from './modelos/modelos';
import { CookieService } from 'ngx-cookie-service'; // Importa el servicio de cookies de ngx-cookie-service

@Injectable({
  providedIn: 'root',
})
export class dataServices {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService // Inyecta el servicio de cookies
  ) {}

  url: string = 'http://localhost:8000/';

  login(usuario: string, contrasenia: string): Observable<any> {
    return this.httpClient.post(this.url + 'login', {
      usuario,
      contrasenia,
    });
  }

  setTokenInCookie(token: string, valorAdicional: string): void {
    const combinar = `${token}:${valorAdicional}`;

    this.cookieService.set(
      'token',
      combinar,
      undefined,
      '/',
      undefined,
      false,
      'None'
    );
  }

  getTokenFromCookie(): string | undefined {
    return this.cookieService.get('token');
  }

  deleteTokenCookie(): void {
    this.cookieService.delete('token');
  }

  isAuthenticated(): boolean {
    const token = this.getTokenFromCookie();
    // Verificar si el token está presente y no está caducado
    return !!token;
  }

  logout(): void {
    // Eliminar el token de la cookie
    this.deleteTokenCookie();
    // Redirigir a la página de inicio de sesión u otra página después de cerrar sesión
  }

  cargarEmpleados(): Observable<any> {
    return this.httpClient.get(this.url + 'seleccionar');
  }

  guardarEmpleado(caracteristicasEmpleados: DatosNomina): Observable<any> {
    return this.httpClient.post(
      this.url + 'guardarEmpleados',
      caracteristicasEmpleados
    );
  }

  cargarRiesgo(): Observable<any> {
    return this.httpClient.get(this.url + 'seleccionRiesgo');
  }

  cargarProductos(): Observable<any> {
    return this.httpClient.get(this.url + 'seleccionarProductos');
  }

  cargarAlmacen(): Observable<any> {
    return this.httpClient.get(this.url + 'sleccionarAlmacen');
  }

  cargarMarcas(): Observable<any> {
    return this.httpClient.get(this.url + 'seleccionarMarcas');
  }

  guardarRiesgo(caracteristicasEmpleados: gestionRiegos): Observable<any> {
    return this.httpClient.post(
      this.url + 'guardarRiesgos',
      caracteristicasEmpleados
    );
  }

  enviar(
    asunto: String,
    texto: string,
    CorreoElectronico: string
  ): Observable<any> {
    return this.httpClient.post(this.url + 'enviarGmail', {
      asunto,
      texto,
      CorreoElectronico,
    });
  }

  eliminarEmpleado(EmpleadoID: any): Observable<any> {
    console.log(this.url + 'eliminarEmpleados' + '/' + EmpleadoID);
    return this.httpClient.delete(
      this.url + 'eliminarEmpleados' + '/' + EmpleadoID
    );
  }

  eliminarRiesgos(idRiesgo: any): Observable<any> {
    console.log(this.url + 'eliminarRiesgos' + '/' + idRiesgo);
    return this.httpClient.delete(
      this.url + 'eliminarRiesgos' + '/' + idRiesgo
    );
  }

  eliminarProducto(idProducto: any): Observable<any> {
    console.log(this.url + 'eliminarProducto' + '/' + idProducto);
    return this.httpClient.delete(
      this.url + 'eliminarProducto' + '/' + idProducto
    );
  }

  eliminarAlmacen(idAlmacen: any): Observable<any> {
    console.log(this.url + 'eliminarAlmacen' + '/' + idAlmacen);
    return this.httpClient.delete(
      this.url + 'eliminarAlmacen' + '/' + idAlmacen
    );
  }

  eliminarMarcas(idMarca: any): Observable<any> {
    console.log(this.url + 'eliminarMarcas' + '/' + idMarca);
    return this.httpClient.delete(
      this.url + 'eliminarMarcas' + '/' + idMarca
    );
  }

  eliminarCliente(idCliente: any): Observable<any> {
    console.log(this.url + 'eliminarCliente' + '/' + idCliente);
    return this.httpClient.delete(
      this.url + 'eliminarCliente' + '/' + idCliente
    );
  }

  seleccionarClientes(): Observable<any> {
    return this.httpClient.get(this.url + 'seleccionarClientes');
  }

  seleccionarTotalSalario(): Observable<any> {
    return this.httpClient.get(this.url + 'seleccionarTotal');
  }

  seleccionarSalarioAlto(): Observable<any> {
    return this.httpClient.get(this.url + 'mayorSalario');
  }

  seleccionarSalarioMenor(): Observable<any> {
    return this.httpClient.get(this.url + 'menorSalario');
  }
}
