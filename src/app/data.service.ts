import {Injectable} from '@angular/core';
import {Task} from './task';
import {Http, Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class DataService{
    
    apiUrl : string ="json/products.json"; 
    
    constructor(private http: Http){}
    
    getTasks(): Observable<Task[]>{
        console.log("in service");
        return this.http.get(this.apiUrl)
                .map(this.extractData)
                .catch(this.handleError);
        
    }
    
    private extractData(res: Response){
        let body = res.json();
        return body || {};
    }
    
    private handleError (error:any){
        //In a real world app, we might use a remote logging infrastructure
        //we'd  also dig deeper into the error to get a better message
        
        let errMsg = (error.message)? error.message:
        error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg);// log to console instead
        return Observable.throw(errMsg);
        }
}