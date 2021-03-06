import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Authenticate } from '../../models/user';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() errorMessage;
  @Output() submitted = new EventEmitter<Authenticate>();
  form:FormGroup;
  constructor(
    public fb:FormBuilder
  ) { 
    this.creatForm();
  }

  ngOnInit() {
  }
  creatForm() {
    this.form = this.fb.group({
      username:[''],
      password:['']
    })
  }
  submit() {
    if(this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
