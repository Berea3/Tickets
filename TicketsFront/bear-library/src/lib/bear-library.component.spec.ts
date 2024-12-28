import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearLibraryComponent } from './bear-library.component';

describe('BearLibraryComponent', () => {
  let component: BearLibraryComponent;
  let fixture: ComponentFixture<BearLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
