import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OlyncService {

  private _baseUrl:String = "http://www.olync.net/olyncapi/api/";
  constructor(private _http : Http) {

  }

  //this is return all states in Nigeria
  getStates(){

  	return this._http.get(this._baseUrl + "states")
  		.map((response:Response) => response.json());
  	/*return [
  		{"id": 1, "name": "Abia"},
  		{"id": 2, "name": "Adamawa"},
  		{"id": 3, "name": "Akwa-Ibom"},
  	];*/
  }

}
