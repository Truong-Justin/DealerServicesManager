import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerIndexComponent } from './dealer-index.component';

describe('DealerIndexComponent', () => {
  let component: DealerIndexComponent;
  let fixture: ComponentFixture<DealerIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerIndexComponent]
    });
    fixture = TestBed.createComponent(DealerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
