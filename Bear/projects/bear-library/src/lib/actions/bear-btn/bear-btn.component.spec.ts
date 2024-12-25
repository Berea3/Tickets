import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearBtnComponent } from './bear-btn.component';

describe('BearBtnComponent', () => {
  let component: BearBtnComponent;
  let fixture: ComponentFixture<BearBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
