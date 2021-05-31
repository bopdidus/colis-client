import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  hide = true;

  registerGroup = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    companyEmail: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
    companyPhone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(6)]),
    managerFullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    managerEmail: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
    managerPhone : new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),

  })
  passwordForm  = new FormGroup({
    password: new FormControl('', Validators.minLength(8)),
    passwordConfirm:  new FormControl('', [Validators.minLength(8)]),
  }, this.passwordMatchValidator)



  constructor() { }

  ngOnInit() {
  }

   passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : {'mismatch': true};
 }

  onSubmit(f) {
    // TODO: Use EventEmitter with form value
    console.warn(f);
  }


}
