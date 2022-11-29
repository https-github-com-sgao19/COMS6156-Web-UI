import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGeneralComponent } from './student-general.component';

describe('StudentGeneralComponent', () => {
  let component: StudentGeneralComponent;
  let fixture: ComponentFixture<StudentGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
