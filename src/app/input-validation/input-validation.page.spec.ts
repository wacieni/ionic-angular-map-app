import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputValidationPage } from './input-validation.page';

describe('InputValidationPage', () => {
  let component: InputValidationPage;
  let fixture: ComponentFixture<InputValidationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
