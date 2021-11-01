import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      username: [],
      email: [],      
      password: []
    })
  }

  submitForm() {
    console.log(this.form.getRawValue());
  }

}
