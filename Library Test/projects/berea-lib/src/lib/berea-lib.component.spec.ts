import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BereaLibComponent } from './berea-lib.component';

describe('BereaLibComponent', () => {
  let component: BereaLibComponent;
  let fixture: ComponentFixture<BereaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BereaLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BereaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
