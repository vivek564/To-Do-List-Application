import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCancellationComponent } from './task-cancellation.component';

describe('TaskCancellationComponent', () => {
  let component: TaskCancellationComponent;
  let fixture: ComponentFixture<TaskCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCancellationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
