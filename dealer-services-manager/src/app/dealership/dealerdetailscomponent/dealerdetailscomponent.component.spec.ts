import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerdetailscomponentComponent } from './dealerdetailscomponent.component';

describe('DealerdetailscomponentComponent', () => {
  let component: DealerdetailscomponentComponent;
  let fixture: ComponentFixture<DealerdetailscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerdetailscomponentComponent]
    });
    fixture = TestBed.createComponent(DealerdetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
