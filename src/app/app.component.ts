import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  suggestUserName() {
    const suggestedName = 'Superuser';

    //# note that this.signupForm is a @ViewChild of type ngForm

    //Allows the changing of just 1 or more values on the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

    //Not best practice. You provide an exact display of the data the form represents
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

  }

  defaultQuestion: string = "teacher";
  answer: string = "";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  @ViewChild('f') signupForm: NgForm;

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(form: NgForm) {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;
    console.log(this.signupForm);

    //After calling this, the ng field classes will be updated 
    //to the state as if the form is first loaded. 
    this.signupForm.reset();

  }

}
