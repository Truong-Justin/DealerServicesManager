import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerservicedetailsComponent } from './customerservicedetails.component';

describe('CustomerservicedetailsComponent', () => {
  let component: CustomerservicedetailsComponent;
  let fixture: ComponentFixture<CustomerservicedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerservicedetailsComponent]
    });
    fixture = TestBed.createComponent(CustomerservicedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
