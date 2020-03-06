import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8080/Company/';
  constructor(private http:HttpClient) { }
 getAllCompany(): Observable<any> {
 return this.http.get(`${this.baseUrl}`+'getAllCompany');
 }
 saveCompany(company: object): Observable<object> {

  return this.http.post(`${this.baseUrl}`+'saveCompany', company);
 }
 deleteUser(companyName: String): Observable<object> {
  return this.http.delete(`${this.baseUrl}/deleteCompany/${companyName}`);
 }
 findOneInAll1nt(companyName: String): Observable<Object> {
  return this.http.get(`${this.baseUrl}/findOneInAllInt/${companyName}`);

 }
 updateUser(companyName: String, value: any): Observable<Object> {

  return this.http.put(`${this.baseUrl}/updateCompany/${companyName}`, value);

 }

   }

