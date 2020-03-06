import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManageService {

private baseUrl = 'http://localhost:8080/manageclass/';
  id3: any;
  stockExchange: any;
  breaf: any;
  address: any;
  remarks: any;
  value: String;
constructor(private http:HttpClient) { }
getAllStockExchangeDataField(): Observable<any> {
return this.http.get(`${this.baseUrl}`+'getAllStockExchangeDataField');
}
saveStockExchangeDataField(manageclass: object): Observable<object> {

return this.http.post(`${this.baseUrl}`+'saveStockExchangeDataField', manageclass);
}
deleteStockExchangeDataField(id3: number): Observable<object> {
return this.http.delete(`${this.baseUrl}/deleteStockExchangeDataField/${id3}`);
}
findOneInAll4(id3: number): Observable<Object> {
return this.http.get(`${this.baseUrl}/findOneInAll4/${id3}`);

}
updateStockExchangeDataField(id3: number, value: any): Observable<Object> {

return this.http.put(`${this.baseUrl}/updateStockExchangeDataField/${id3}`, value);

}
}
