import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3990Component } from './test-component3990.component';

describe('TestComponent3990Component', () => {
  let component: TestComponent3990Component;
  let fixture: ComponentFixture<TestComponent3990Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3990Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
