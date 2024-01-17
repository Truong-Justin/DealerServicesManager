import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerIndexComponent } from './customer-index.component';

describe('CustomerIndexComponent', () => {
  let component: CustomerIndexComponent;
  let fixture: ComponentFixture<CustomerIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerIndexComponent]
    });
    fixture = TestBed.createComponent(CustomerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
