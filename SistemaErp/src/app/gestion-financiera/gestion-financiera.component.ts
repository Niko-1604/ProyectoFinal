import { Component } from '@angular/core';
import { gestionRiegos } from '../modelos/modelos';
import { ServiciosDatosService } from '../servicios-datos.service';

@Component({
  selector: 'app-gestion-financiera',
  templateUrl: './gestion-financiera.component.html',
  styleUrls: ['./gestion-financiera.component.css'],
})
export class GestionFinancieraComponent {
  constructor(private datos: ServiciosDatosService) {}
  arraySalariosTotal: any[] = [];
  arraySalarioMayor: any[] = [];
  arraySalarioMenor: any[] = [];
  arrayRiesgos: any[] = [];

  datosGestion: gestionRiegos = {
    descripcion: '',
    probabilidad: '',
    impacto: '',
    medidas: '',
    estado: '',
  };

  ngOnInit(): void {
    this.nomina();
    this.salarioMayor();
    this.salarioMenor();
    this.riesgos();
  }
  private nomina() {
    this.datos.seleccionarTotalSalarios().subscribe((nomina) => {
      this.arraySalariosTotal = Object.values(nomina);
      console.log(this.arraySalariosTotal);
    });
  }

  private salarioMayor() {
    this.datos.seleccionarMayorSalario().subscribe((salarioMayor) => {
      this.arraySalarioMayor = Object.values(salarioMayor);
    });
  }

  private salarioMenor() {
    this.datos.seleccionarMenorSalario().subscribe((salarioMenor) => {
      this.arraySalarioMenor = Object.values(salarioMenor);
    });
  }

  private riesgos() {
    this.datos.seleccionarRiesgo().subscribe((riesgo) => {
      this.arrayRiesgos = Object.values(riesgo);
      console.log(this.arrayRiesgos);
    });
  }

  guardarRiesgo() {
    this.datos.guardarRiesgo(this.datosGestion).subscribe(
      (res) => {
        console.log(res);
        alert('Hemos envidao tu informacion al correo ');
        location.reload();
      },
      (err) => {
        console.log(err);
        alert('Correcto');
        location.reload();
      }
    );
  }
}