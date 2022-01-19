import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators, FormArray, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['' ,[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }
  
}
