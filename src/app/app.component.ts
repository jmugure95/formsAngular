import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularForm';
  genders = ['male', 'female'];
  mediums = ['Email', 'Phone'];
  signUpForm: FormGroup;
  showEmail = false;
  showPhone = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      medium: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      user_pwd: new FormControl(null, Validators.required),
      user_pwd_confirm: new FormControl(null, Validators.required),
      phone_no: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    });
  }

  getValue(): any{
    // return this.signUpForm.get('medium') === 'Email' ? this.showPhone : !this.showEmail;
  }

  onSubmit(): any{
    console.log(this.signUpForm);
    // this.signUpForm.reset();
  }
}


// import {Component, OnInit} from '@angular/core';
// import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   title = 'angularForm';
//   genders = ['male', 'female'];
//   mediums = ['Email', 'Phone'];
//   signUpForm: FormGroup;
//
//   constructor(private formBuilder: FormBuilder) {
//   }
//
//   ngOnInit(): void {
//     this.signUpForm = new FormGroup({
//       userData: new FormGroup({
//         username: new FormControl(null, Validators.required),
//         email: new FormControl(null, [Validators.required, Validators.email])
//       }),
//       gender: new FormControl(Validators.required),
//       // hobbies: new FormArray([])
//       hobbies: new FormArray([
//         new FormControl('')])
//     });
//   }
//
//   get controls(): any{
//     return (this.signUpForm.get('hobbies') as FormArray).controls;
//   }
//
//   onAddHobby(): any{
//     const control = new FormControl(null, Validators.required);
//     (this.signUpForm.get('hobbies') as FormArray).push(control);
//   }
//
//   onSubmit(): any{
//     console.log(this.signUpForm);
//     // this.signUpForm.reset();
//   }
//
// }
//
