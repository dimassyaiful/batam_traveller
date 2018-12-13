import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahWisataPage } from './tambah-wisata.page';

describe('TambahWisataPage', () => {
  let component: TambahWisataPage;
  let fixture: ComponentFixture<TambahWisataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahWisataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahWisataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
