import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2773Component } from './test-component2773.component';

describe('TestComponent2773Component', () => {
  let component: TestComponent2773Component;
  let fixture: ComponentFixture<TestComponent2773Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2773Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
