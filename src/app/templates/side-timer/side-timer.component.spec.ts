import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTimerComponent } from './side-timer.component';

describe('SideTimerComponent', () => {
  let component: SideTimerComponent;
  let fixture: ComponentFixture<SideTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
