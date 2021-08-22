import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultsComponent } from './exam-results.component';

describe('ExamResultsComponent', () => {
  let component: ExamResultsComponent;
  let fixture: ComponentFixture<ExamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
