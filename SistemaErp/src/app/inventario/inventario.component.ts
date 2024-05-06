import { Component } from '@angular/core';
import { ServiciosDatosService } from '../servicios-datos.service';
import { Almacen, Producto } from '../modelos/modelos';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  arrayProductos: any[] = [];
  arrayAlmacen: any[] = [];
  arrayMarcas: any[] = [];

  producto: Producto = {
    cantidad: 0,
    descripcionProd: "",
    id: 0,
    marca: "",
    precio: 0
  }

  almacen: Almacen = {
    direccion: "",
    id: 0,
    nombreAlmacen: "",
    telefono: ""
  }

  constructor(private datos: ServiciosDatosService) { }

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

  seleccionarProductos(productoID: any): void {
    console.log(productoID)
    const producto = this.arrayProductos.find((producto) => producto.id === productoID)
    console.log(producto);
    this.producto = producto
    this.producto.id = productoID
  }

  agregarProducto(): void {
    this.datos.guardarProducto(this.producto).subscribe(
      (response) => console.log(response), (error) => location.reload())
  }

  seleccionarAlmacen(almacenID: any): void {
    console.log(almacenID)
    const almacen = this.arrayAlmacen.find((almacen) => almacen.id === almacenID)
    console.log(almacen);
    this.almacen = almacen
    this.almacen.id = almacenID
  }

  agregarAlmacen(): void {
    this.datos.guardarAlmacen(this.almacen).subscribe(
      (response) => console.log(response), (error) => location.reload())
  }

}
