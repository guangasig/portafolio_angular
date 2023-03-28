import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioBlogComponent } from './portafolio-blog.component';

describe('PortafolioBlogComponent', () => {
  let component: PortafolioBlogComponent;
  let fixture: ComponentFixture<PortafolioBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
