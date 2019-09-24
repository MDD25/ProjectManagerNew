import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx'
import { User } from './User';


@Injectable()
export class UserService {
//  baseUrl: string = 'http://localhost/ProjectManagerAPI/api/user';
  baseUrl: string = 'http://localhost:62634/api/user';
  constructor(private _http: Http) { }

  saveUser(user) {
    //debugger;
    var userBody = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ headers: headerOptions });
    return this._http.post(this.baseUrl+'/Create', userBody, requestOptions);
  }

  getusers(): Observable<User[]> {
    return this._http.get(this.baseUrl + '/GetUsers')
      .map((data: Response) => {
        return data.json() as User[];
      }).catch((error: any) => Observable.throw("Error in x service"))
  }

  deleteuser(id: number) {
    return this._http.delete(this.baseUrl + '/Delete/' + id);
  }

  updateUser(user) {
    debugger;
    var userBody = JSON.stringify(user);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ headers: headerOptions });
    return this._http.put(this.baseUrl + '/Update', userBody, requestOptions);

  }

  _errorHandler(error: Response) {//debugger;
    console.log(error);
    return Observable.throw(error || "Internal server error");
  }
}
