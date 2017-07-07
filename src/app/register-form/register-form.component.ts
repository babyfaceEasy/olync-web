import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { OlyncService } from '../olync.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  states = [];	
  constructor(private _olyncService: OlyncService) { }

  ngOnInit() {
  	//this.states = this._olyncService.getStates();
  	this._olyncService.getStates()
  		.subscribe(resStateData => this.states = resStateData);
  		console.log(this.states);
  }

  //this is called when u click
  registerUser(form:any){
    //console.log(form);
    const body = JSON.stringify({
      name: form.name,
      email: form.email,
      gender: form.gender,
      state_id_val: form.state,
      phone_no: form.phoneNo,
      password: form.password,
      username: form.username,
      callup_no: form.callupNo
    });

    //console.log(body);

    this._olyncService.addUser(body)
      .subscribe(
          (resData) => alert(resData.kunle)
       );
    //form.reset();
  }

}
