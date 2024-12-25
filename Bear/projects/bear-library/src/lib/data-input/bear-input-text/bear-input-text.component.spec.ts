import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearInputTextComponent } from './bear-input-text.component';

describe('BearInputTextComponent', () => {
  let component: BearInputTextComponent;
  let fixture: ComponentFixture<BearInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearInputTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
