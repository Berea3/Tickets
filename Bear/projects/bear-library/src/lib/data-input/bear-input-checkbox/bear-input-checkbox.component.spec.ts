import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearInputCheckboxComponent } from './bear-input-checkbox.component';

describe('BearInputCheckboxComponent', () => {
  let component: BearInputCheckboxComponent;
  let fixture: ComponentFixture<BearInputCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearInputCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
