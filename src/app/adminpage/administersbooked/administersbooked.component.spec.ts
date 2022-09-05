import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministersbookedComponent } from './administersbooked.component';

describe('AdministersbookedComponent', () => {
  let component: AdministersbookedComponent;
  let fixture: ComponentFixture<AdministersbookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministersbookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministersbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
