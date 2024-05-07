import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataServices } from '../dataServices';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private datos: dataServices
  ) {}

  usuario: string = '';
  contrasenia: string = '';

  login() {
    this.datos.login(this.usuario, this.contrasenia).subscribe((response) => {
      localStorage.setItem('rol',response.user.rol)
      console.log(response);

      if (this.datos) {
        this.datos.setTokenInCookie(response.token, '1');
      }
      this.router.navigate(['/principal']);
    });
  }
}
