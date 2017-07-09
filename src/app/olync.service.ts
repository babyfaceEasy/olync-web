import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { State } from './models/state';
import { User } from './models/user';

@Injectable()
export class OlyncService {

  //private _baseUrl:String = "http://www.olync.net/olyncapi/api/";
  private _baseUrl:string = "http://localhost:8080/olync54_api/public/api/";
  constructor(private _http : Http) {}

  private extractData(res: Response){
    let body = res.json();
    //this returns the body or the empty object
    return body || {};
  }//end of extractData

  getStatesWithObservable(): Observable<State[]>{
    let url = this._baseUrl + "states";
    return this._http.get(url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }//end of getStatesWithObservable()

  //addUserWithObservable(user: User): Observable<any>{
  addUserWithObservable(data: any): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':  '*'});
    let options = new RequestOptions({ headers: headers});
    let url = this._baseUrl + "register";
    //const user = JSON.stringify(data);

    console.log("before going " + data);

    //return this._http.post(url, user, options)
    //use Headers directly in our instead of RequestOptions
    return this._http.post(url, data, headers)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }//end of addUserWithObservable


  //---------------------- Using Promise -----------------------------//
  getStatesWithPromise():  Promise<State[]>{
    let url = this._baseUrl + "states";
    return this._http.get(url).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }//end of getStatesWithPromise

  addUserWithPromise(user: User): Promise<User>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    let url = this._baseUrl + "register";

    return this._http.post(url, user, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  } //end of addUserWithPromise

  //this is to register a new user
  addUser(data_load): Observable<any>{

    let payLoad = {name: "Olakunle Odegabro", email: "oodegbaro@kcam.com", gender: "M"};
    const load = JSON.stringify(payLoad);

    let header = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':  '*'});
    let options = new RequestOptions({headers: header});
    console.log(load);
    return this._http.post("http://localhost:8080/olync54_api/public/api/register", payLoad, header)
      .map((response:Response) => response.json())
      .catch(this.handleErrorObservable);
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


  //this sections handles the errors
  private handleErrorObservable(error: Response | any){
    console.log('kunle');
    console.error(error._body.message || error);
    return Observable.throw(error.message || error);
  }

  private  handleErrorPromise(error: Response | any){
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
