import { Component } from '@angular/core';
import { ServiciosDatosService } from '../servicios-datos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  arrayProductos: any[] = [];
  arrayAlmacen: any[] = [];

  constructor(private datos: ServiciosDatosService) {}

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarAlmacen();
  }
  private cargarProductos() {
    this.datos.seleccionarProductos().subscribe((nomina) => {
      this.arrayProductos = Object.values(nomina);
      console.log(this.arrayProductos);
    });
  }

  private cargarAlmacen() {
    this.datos.seleccionarAlamacen().subscribe((nomina) => {
      this.arrayAlmacen = Object.values(nomina);
      console.log(this.arrayAlmacen);
    });
  }
}
