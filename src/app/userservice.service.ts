import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({

    providedIn: 'root'

})

export class UserServiceService {
   /* findByUsernameAndPassword(username: String, password: String) {
        throw new Error("Method not implemented.");
    }
*/

    private baseUrl = 'http://localhost:8080/users/';
    constructor(private http: HttpClient) { }
    getAllusers(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'getAllUsers');
    }
    saveUser(userp: object): Observable<object> {

        return this.http.post(`${this.baseUrl}` + 'saveUser', userp);
    }
    deleteUser(username: String): Observable<object> {
        return this.http.delete(`${this.baseUrl}/deleteUser/${username}`);
    }
    findOneInAllInt(username: String): Observable<Object> {
        return this.http.get(`${this.baseUrl}/findOneInAllInt/${username}`);

    }
    updateUser(username: String, value: any): Observable<Object> {

        return this.http.put(`${this.baseUrl}/updateUser/${username}`, value);
    }

        findByUsernameAndPassword(username: String, password: String, value: any): Observable < Object > {
            return this.http.put('${this.baseUrl}/this.findByUsernameAndPassword/${username}', value);
        }

    }
