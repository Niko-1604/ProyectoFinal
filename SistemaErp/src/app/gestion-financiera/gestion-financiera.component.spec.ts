import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFinancieraComponent } from './gestion-financiera.component';

describe('GestionFinancieraComponent', () => {
  let component: GestionFinancieraComponent;
  let fixture: ComponentFixture<GestionFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFinancieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
