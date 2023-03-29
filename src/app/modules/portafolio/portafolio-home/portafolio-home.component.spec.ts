import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioHomeComponent } from './portafolio-home.component';

describe('PortafolioHomeComponent', () => {
  let component: PortafolioHomeComponent;
  let fixture: ComponentFixture<PortafolioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
