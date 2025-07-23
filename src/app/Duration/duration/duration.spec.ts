import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duration } from './duration';

describe('Duration', () => {
  let component: Duration;
  let fixture: ComponentFixture<Duration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Duration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Duration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
