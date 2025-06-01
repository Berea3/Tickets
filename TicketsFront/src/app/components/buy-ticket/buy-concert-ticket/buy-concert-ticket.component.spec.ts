import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyConcertTicketComponent } from './buy-concert-ticket.component';

describe('BuyConcertTicketComponent', () => {
  let component: BuyConcertTicketComponent;
  let fixture: ComponentFixture<BuyConcertTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyConcertTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyConcertTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
