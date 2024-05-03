import { Component } from '@angular/core';
import { dataServices } from '../dataServices';
import { ServiciosDatosService } from '../servicios-datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  router: any;
  constructor(private datos: dataServices) {}

  cerrarCesion() {
    // El usuario está autenticado, permitir el acceso a la ruta
    this.datos.logout();
    location.reload();
  }
}
