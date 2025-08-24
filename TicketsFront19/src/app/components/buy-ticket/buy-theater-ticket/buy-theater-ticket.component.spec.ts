import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTheaterTicketComponent } from './buy-theater-ticket.component';

describe('BuyTheaterTicketComponent', () => {
  let component: BuyTheaterTicketComponent;
  let fixture: ComponentFixture<BuyTheaterTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyTheaterTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTheaterTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
