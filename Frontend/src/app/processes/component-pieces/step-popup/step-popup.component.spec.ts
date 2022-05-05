import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPopupComponent } from './step-popup.component';

describe('StepPopupComponent', () => {
  let component: StepPopupComponent;
  let fixture: ComponentFixture<StepPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
