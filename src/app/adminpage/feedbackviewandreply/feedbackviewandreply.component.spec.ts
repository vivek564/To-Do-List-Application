import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackviewandreplyComponent } from './feedbackviewandreply.component';

describe('FeedbackviewandreplyComponent', () => {
  let component: FeedbackviewandreplyComponent;
  let fixture: ComponentFixture<FeedbackviewandreplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackviewandreplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackviewandreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
