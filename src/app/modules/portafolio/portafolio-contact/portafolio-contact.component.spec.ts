import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioContactComponent } from './portafolio-contact.component';

describe('PortafolioContactComponent', () => {
  let component: PortafolioContactComponent;
  let fixture: ComponentFixture<PortafolioContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
