import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormControlComponent } from './generic-form-control.component';

describe('GenericFormControlComponent', () => {
  let component: GenericFormControlComponent;
  let fixture: ComponentFixture<GenericFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
