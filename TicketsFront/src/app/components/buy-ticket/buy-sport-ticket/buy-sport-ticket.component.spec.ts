import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySportTicketComponent } from './buy-sport-ticket.component';

describe('BuySportTicketComponent', () => {
  let component: BuySportTicketComponent;
  let fixture: ComponentFixture<BuySportTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuySportTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuySportTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
