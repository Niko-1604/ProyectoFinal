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
  arrayMarcas: any[] = [];

  constructor(private datos: ServiciosDatosService) {}

  ngOnInit(): void {
    this.cargarProductos();
    this.cargarAlmacen();
    this.cargarMarcas();
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

  private cargarMarcas() {
    this.datos.seleccionarMarcas().subscribe((nomina) => {
      this.arrayMarcas = Object.values(nomina);
      console.log(this.arrayMarcas);
    });
  }

  eliminarProducto(idProducto: any): void {
    this.datos.eliminarProducto(idProducto).subscribe(
      (response) => {
        console.log('exito', response);
      },
      (error) => {
        location.reload();
        // Manejar errores aquí...
      }
    );
  }

  eliminarAlmacen(idAlmacen: any): void {
    this.datos.eliminarAlmacen(idAlmacen).subscribe(
      (response) => {
        console.log('exito', response);
      },
      (error) => {
        location.reload();
        // Manejar errores aquí...
      }
    );
  }

  eliminarMarcas(idMarca: any): void {
    this.datos.eliminarMarcas(idMarca).subscribe(
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
