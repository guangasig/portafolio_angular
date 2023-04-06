import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsMediaComponent } from './socials-media.component';

describe('SocialsMediaComponent', () => {
  let component: SocialsMediaComponent;
  let fixture: ComponentFixture<SocialsMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialsMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
