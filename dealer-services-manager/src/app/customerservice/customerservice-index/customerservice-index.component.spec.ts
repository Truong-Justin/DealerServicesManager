import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceIndexComponent } from './customerservice-index.component';

describe('CustomerserviceIndexComponent', () => {
  let component: CustomerserviceIndexComponent;
  let fixture: ComponentFixture<CustomerserviceIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerserviceIndexComponent]
    });
    fixture = TestBed.createComponent(CustomerserviceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
