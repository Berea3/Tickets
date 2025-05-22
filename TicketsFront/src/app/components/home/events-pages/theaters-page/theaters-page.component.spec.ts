import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersPageComponent } from './theaters-page.component';

describe('TheatersPageComponent', () => {
  let component: TheatersPageComponent;
  let fixture: ComponentFixture<TheatersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheatersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheatersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
