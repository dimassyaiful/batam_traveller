import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcrud',
  templateUrl: './testcrud.page.html',
  styleUrls: ['./testcrud.page.scss'],
})
export class TestcrudPage implements OnInit {
  testcrud: any = {
    col1: '',
    email: ''
  }
  constructor() { }

  ngOnInit() {
  }

  
}
