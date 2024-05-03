import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrincipalErpComponent } from './principal-erp/principal-erp.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { GestionFinancieraComponent } from './gestion-financiera/gestion-financiera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guardian';
import { LoginComponent } from './login/login.component';
import { InventarioComponent } from './inventario/inventario.component';
import { GestionRiesgoComponent } from './gestion-riesgo/gestion-riesgo.component';
import { MarketingComponent } from './marketing/marketing.component';

const appRoute: Routes = [
  {
    path: 'principal',
    component: PrincipalErpComponent,
    canActivate: [AuthGuard],
  },

  { path: '', component: LoginComponent },
  {
    path: 'gestionUsuarios',
    component: GestionUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gestionFinanzas',
    component: GestionFinancieraComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gestionInventario',
    component: InventarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gestionRiesgo',
    component: GestionRiesgoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gestionMarketing',
    component: MarketingComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalErpComponent,
    GestionUsuarioComponent,
    GestionFinancieraComponent,
    NavbarComponent,
    LoginComponent,
    InventarioComponent,
    GestionRiesgoComponent,
    MarketingComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
