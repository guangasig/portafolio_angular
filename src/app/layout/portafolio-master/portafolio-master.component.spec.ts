import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioMasterComponent } from './portafolio-master.component';

describe('PortafolioMasterComponent', () => {
  let component: PortafolioMasterComponent;
  let fixture: ComponentFixture<PortafolioMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
