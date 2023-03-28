import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioFooterComponent } from './portafolio-footer.component';

describe('PortafolioFooterComponent', () => {
  let component: PortafolioFooterComponent;
  let fixture: ComponentFixture<PortafolioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
