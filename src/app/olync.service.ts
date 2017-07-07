import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OlyncService {

  //private _baseUrl:String = "http://www.olync.net/olyncapi/api/";
  private _baseUrl:String = "http://localhost:8080/olync54_api/public/api/";
  constructor(private _http : Http) {}

  getStatesWithObservable(): Observable

  //this is to register a new user
  addUser(data_load): Observable<any>{

    let payLoad = {"name": "Olakunle Odegabro", "email": "oodegbaro@kcam.com", "gender": "M"};

    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
    console.log(data_load);
    return this._http.post("http://localhost:8080/olync54_api/public/api/register", data_load, header)
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
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private  handleErrorPromise(error: Response | any){
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
