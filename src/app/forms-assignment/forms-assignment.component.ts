import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-assignment',
  templateUrl: './forms-assignment.component.html',
  styleUrls: ['./forms-assignment.component.css']
})
export class FormsAssignmentComponent implements OnInit {

  constructor() { }
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
