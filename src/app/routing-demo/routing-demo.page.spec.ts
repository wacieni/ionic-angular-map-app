import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingDemoPage } from './routing-demo.page';

describe('RoutingDemoPage', () => {
  let component: RoutingDemoPage;
  let fixture: ComponentFixture<RoutingDemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
