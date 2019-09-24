import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx'
import {Project} from './Project';
import { DebugRenderer2 } from '@angular/core/src/view/services';


@Injectable()
export class ProjectService {
    //  baseUrl: string = 'http://localhost/ProjectManagerAPI/api/Project';
    baseUrl: string = 'http://localhost:62634/api/Project';
    constructor(private _http: Http) { }

    saveProject(project) {
      
      var projectBody = JSON.stringify(project);
      var headerOptions = new Headers({'Content-Type':'application/json'});
      var requestOptions = new RequestOptions({headers : headerOptions});
      return this._http.post(this.baseUrl, projectBody, requestOptions);
      // .map(res => res.json()) // ...and calling .json() on the response to return data
      // .catch((error:any) => this._errorHandler(error.error)) //...errors if
      // .subscribe();
    }
   
    getprojects(): Observable<Project[]>{
     
     
      return this._http.get(this.baseUrl + '/GetProjects')
      .map((data : Response) =>{
        return data.json() as Project[];
      }).catch((error:any) => Observable.throw(error.error.json))
    }

    deleteProject(id: number){      
       return this._http.delete(this.baseUrl+'/Delete/'+id);
       //.map(res => res.json());
    }

    updateProject(project) {
      //debugger;
      var userBody = JSON.stringify(project);
      var headerOptions = new Headers({'Content-Type':'application/json'});
      var requestOptions = new RequestOptions({headers : headerOptions});
      return this._http.put(this.baseUrl, userBody, requestOptions);
      }
    

    _errorHandler(error:Response){
      //debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
}
