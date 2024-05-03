import { TestBed } from '@angular/core/testing';

import { ServiciosDatosService } from './servicios-datos.service';

describe('ServiciosDatosService', () => {
  let service: ServiciosDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
