import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTicketComponent } from './check-ticket.component';

describe('CheckTicketComponent', () => {
  let component: CheckTicketComponent;
  let fixture: ComponentFixture<CheckTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
