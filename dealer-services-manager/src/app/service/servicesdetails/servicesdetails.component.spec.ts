import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesdetailsComponent } from './servicesdetails.component';

describe('ServicesdetailsComponent', () => {
  let component: ServicesdetailsComponent;
  let fixture: ComponentFixture<ServicesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesdetailsComponent]
    });
    fixture = TestBed.createComponent(ServicesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
