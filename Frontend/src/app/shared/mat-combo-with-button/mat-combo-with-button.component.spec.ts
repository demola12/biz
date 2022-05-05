import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatComboWithButtonComponent } from './mat-combo-with-button.component';

describe('MatComboWithButtonComponent', () => {
  let component: MatComboWithButtonComponent;
  let fixture: ComponentFixture<MatComboWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatComboWithButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatComboWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
