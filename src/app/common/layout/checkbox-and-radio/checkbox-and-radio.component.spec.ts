import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAndRadioComponent } from './checkbox-and-radio.component';

describe('CheckboxAndRadioComponent', () => {
  let component: CheckboxAndRadioComponent;
  let fixture: ComponentFixture<CheckboxAndRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxAndRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxAndRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
