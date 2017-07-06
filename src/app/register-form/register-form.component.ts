import { Component, OnInit } from '@angular/core';

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
  

}
