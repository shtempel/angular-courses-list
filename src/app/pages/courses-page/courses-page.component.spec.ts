import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcesPageComponent } from './courses-page.component';

describe('CourcesPageComponent', () => {
  let component: CourcesPageComponent;
  let fixture: ComponentFixture<CourcesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourcesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
