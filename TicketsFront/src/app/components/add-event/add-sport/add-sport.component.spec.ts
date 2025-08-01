import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSportComponent } from './add-sport.component';

describe('AddSportComponent', () => {
  let component: AddSportComponent;
  let fixture: ComponentFixture<AddSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
