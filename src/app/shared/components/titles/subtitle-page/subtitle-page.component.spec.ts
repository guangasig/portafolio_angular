import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitlePageComponent } from './subtitle-page.component';

describe('SubtitlePageComponent', () => {
  let component: SubtitlePageComponent;
  let fixture: ComponentFixture<SubtitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
