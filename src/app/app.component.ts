import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("form") signup: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  colors = ['black', 'white', 'red'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signup.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male' 
    // })
    this.signup.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signup);
    this.submitted = true;
    this.user.username = this.signup.value.userData.username;
    this.user.email = this.signup.value.userData.email;
    this.user.secretQuestion = this.signup.value.secret; 
    this.user.answer = this.signup.value.questionAnswer;
    this.user.gender = this.signup.value.gender;

    this.signup.reset();
  }
}
