import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { OlyncService } from '../olync.service';

import { State } from '../models/state';
import { User } from '../models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  states: State[];
  user = new User();
  errorMessage: string;
  stateName: string;
  state = new State();	
  constructor(private _olyncService: OlyncService) { }

  private reset():void{

  }

  ngOnInit() {
  	//this.states = this._olyncService.getStates();
  	/*this._olyncService.getStates()
  		.subscribe(resStateData => this.states = resStateData);
  		console.log(this.states);*/
      //this is to get the states
      this.fetchStates();
  }

  fetchStates(): void{
    this._olyncService.getStatesWithObservable()
      .subscribe( states => this.states = states, 
                  error => this.errorMessage = <any>error);
  }
  //this is called when u click
  registerUser(form:any){
    //console.log(form);
    let data = {
      name: form.name,
      email: form.email,
      gender: form.gender,
      state_id_val: form.state,
      phone_no: form.phoneNo,
      password: form.password,
      username: form.username,
      callup_no: form.callupNo
    };

    //console.log(body);
    this._olyncService.addUserWithObservable(data)
    //this._olyncService.addUser(data)
      .subscribe(
          (resData) => console.log(resData)
       );
    //form.reset();
  }

}
