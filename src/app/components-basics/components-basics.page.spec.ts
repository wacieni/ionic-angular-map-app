import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsBasicsPage } from './components-basics.page';

describe('ComponentsBasicsPage', () => {
  let component: ComponentsBasicsPage;
  let fixture: ComponentFixture<ComponentsBasicsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBasicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
