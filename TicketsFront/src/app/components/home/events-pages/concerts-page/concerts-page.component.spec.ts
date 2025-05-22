import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsPageComponent } from './concerts-page.component';

describe('ConcertsPageComponent', () => {
  let component: ConcertsPageComponent;
  let fixture: ComponentFixture<ConcertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
