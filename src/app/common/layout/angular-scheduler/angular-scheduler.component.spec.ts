import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchedulerComponent } from './angular-scheduler.component';

describe('AngularSchedulerComponent', () => {
  let component: AngularSchedulerComponent;
  let fixture: ComponentFixture<AngularSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
