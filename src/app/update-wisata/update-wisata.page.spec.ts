import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWisataPage } from './update-wisata.page';

describe('UpdateWisataPage', () => {
  let component: UpdateWisataPage;
  let fixture: ComponentFixture<UpdateWisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
