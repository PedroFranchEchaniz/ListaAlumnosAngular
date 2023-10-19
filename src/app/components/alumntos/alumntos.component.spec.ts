import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumntosComponent } from './alumntos.component';

describe('AlumntosComponent', () => {
  let component: AlumntosComponent;
  let fixture: ComponentFixture<AlumntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumntosComponent]
    });
    fixture = TestBed.createComponent(AlumntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
