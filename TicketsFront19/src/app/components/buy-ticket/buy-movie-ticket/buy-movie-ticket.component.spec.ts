import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMovieTicketComponent } from './buy-movie-ticket.component';

describe('BuyMovieTicketComponent', () => {
  let component: BuyMovieTicketComponent;
  let fixture: ComponentFixture<BuyMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyMovieTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
