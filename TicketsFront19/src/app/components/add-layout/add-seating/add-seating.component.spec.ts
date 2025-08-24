import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeatingComponent } from './add-seating.component';

describe('AddSeatingComponent', () => {
  let component: AddSeatingComponent;
  let fixture: ComponentFixture<AddSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSeatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
