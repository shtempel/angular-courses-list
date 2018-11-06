import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CouseItemComponent;
  let fixture: ComponentFixture<CouseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
