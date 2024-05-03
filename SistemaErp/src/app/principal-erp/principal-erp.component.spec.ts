import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalErpComponent } from './principal-erp.component';

describe('PrincipalErpComponent', () => {
  let component: PrincipalErpComponent;
  let fixture: ComponentFixture<PrincipalErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalErpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
