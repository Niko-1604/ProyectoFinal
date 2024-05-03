// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { dataServices } from '../app/dataServices';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private dataService: dataServices,
    private router: Router,
    private cookieService: CookieService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.dataService.isAuthenticated()) {
      return true;
    } else {
      // Redirigir a la página de inicio de sesión si no está autenticado
      this.router.navigate(['']);
      return false;
    }
  }
}
