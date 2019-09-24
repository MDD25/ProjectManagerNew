
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
///import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx'
import { Task } from '../model/task';
import { MatTabLinkBase } from '@angular/material/tabs/typings/tab-nav-bar';
import { TaskViewModel } from '../model/task-view-model';
import { ParentTask } from '../model/parent-task';


@Injectable()
export class AddtaskService {
  //baseUrl: string = 'http://localhost/ProjectManagerAPI/api/Task';
    baseUrl: string = 'http://localhost:62634/api/Task';
  constructor(private _http: Http) { }

  saveTask(task) {
    var userBody = JSON.stringify(task);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ headers: headerOptions });
    return this._http.post(this.baseUrl, userBody, requestOptions);
  }

  getParentTasks(): Observable<ParentTask[]> {

    return this._http.get('http://localhost/ProjectManagerAPI/api/Parent/GetParentTasks')
      .map((data: Response) => {
        return data.json() as ParentTask[];
      }).catch((error: any) => Observable.throw("Error in x service"))
  }

  getTasks(): Observable<TaskViewModel[]> {

    return this._http.get(this.baseUrl + '/GetTasks')
      .map((data: Response) => {
        return data.json() as TaskViewModel[];
      }).catch((error: any) => Observable.throw("Error in x service"))
  }

  deleteTask(id: number) {
    return this._http.delete(this.baseUrl + '/Delete/' + id);
  }

  endTask(task: TaskViewModel) {
    var userBody = JSON.stringify(task);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ headers: headerOptions });
    return this._http.post(this.baseUrl + '/EndTask', userBody, requestOptions);
  }

  updateTask(task) {
    var userBody = JSON.stringify(task);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ headers: headerOptions });
    return this._http.put(this.baseUrl+ '/Update',userBody, requestOptions);
  }

  _errorHandler(error: Response) {//debugger;
    console.log(error);
    return Observable.throw(error || "Internal server error");
  }
}