import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcrudPage } from './testcrud.page';

describe('TestcrudPage', () => {
  let component: TestcrudPage;
  let fixture: ComponentFixture<TestcrudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcrudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
