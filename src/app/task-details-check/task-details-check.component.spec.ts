import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsCheckComponent } from './task-details-check.component';

describe('TaskDetailsCheckComponent', () => {
  let component: TaskDetailsCheckComponent;
  let fixture: ComponentFixture<TaskDetailsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
