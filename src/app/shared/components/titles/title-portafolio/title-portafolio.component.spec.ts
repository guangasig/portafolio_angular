import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePortafolioComponent } from './title-portafolio.component';

describe('TitlePortafolioComponent', () => {
  let component: TitlePortafolioComponent;
  let fixture: ComponentFixture<TitlePortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePortafolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
