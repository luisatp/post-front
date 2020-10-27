import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'; //npm install --save rxjs-compat

@Injectable()
export class HttpService {


    public _URL = "http://localhost:3000/";
    constructor(private http: Http) { }

    loginPost(data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this._URL +  "signin", data , { headers: headers }).map(res => res.json());
    }

    registrarPost(data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this._URL +  "register", data , { headers: headers }).map(res => res.json());
    }

    registrarUser(data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this._URL +  "users", data , { headers: headers }).map(res => res.json());
    }
    getUsers() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get("https://reqres.in/api/users", { headers: headers }).map(res => res.json());
    }

}