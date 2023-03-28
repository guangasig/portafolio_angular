import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioSkillsComponent } from './portafolio-skills.component';

describe('PortafolioSkillsComponent', () => {
  let component: PortafolioSkillsComponent;
  let fixture: ComponentFixture<PortafolioSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
