import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in-information',
  templateUrl: './log-in-information.component.html',
  styleUrls: ['./log-in-information.component.css']
})
export class LogInInformationComponent {
subscriptions = ['Basic', 'Advanced', 'Pro' ]
selectedSubscription = 'Advanced'
@ViewChild ('signupForm') sgnForm: NgForm;
onSubmit(){
console.log(this.sgnForm.value);
}
}
