export interface DatosNomina {
  nombre: string;
  apellido: string;
  permiso: boolean;
  status: string;
  salario: number;
  id: number;
}

export interface gestionRiegos {
  descripcion: string;
  probabilidad: string;
  impacto: string;
  medidasMitigacion: string;
  estados: string;
  id: number;
}

export interface Producto{
  id: number;
  descripcionProd: string;
  marca: string;
  cantidad: number;
  precio: number;
}

export interface Almacen{
  id: number;
  nombreAlmacen: string;
  direccion: string;
  telefono: string;
}

export interface Cliente{
  id: number
  nombre: string
  apellido: string
  correo: string
  telefono: string
  direccion: string
}
