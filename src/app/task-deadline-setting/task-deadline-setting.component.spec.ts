import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeadlineSettingComponent } from './task-deadline-setting.component';

describe('TaskDeadlineSettingComponent', () => {
  let component: TaskDeadlineSettingComponent;
  let fixture: ComponentFixture<TaskDeadlineSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDeadlineSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeadlineSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
