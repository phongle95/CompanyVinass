import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Qlhv } from '../model/qlhv';

@Injectable()
export class QlhvService {
  //URL for CRUD operations 
  // //for local
  qlhvUrl = "http://localhost:8080/api/api/qlhv";
  qlhvAddUrl = "http://localhost:8080/api/api/qlhv/add";
  qlhvUpdateUrl = "http://localhost:8080/api/api/qlhv/update";
  qlhvDeleteUrl = "http://localhost:8080/api/api/qlhv/delete";

  //for deploy
  // qlhvUrl = "https://ghichu.000webhostapp.com/api/api/qlhv";
  // qlhvAddUrl = "https://ghichu.000webhostapp.com/api/api/qlhv/add";
  // qlhvUpdateUrl = "https://ghichu.000webhostapp.com/api/api/qlhv/update";
  // qlhvDeleteUrl = "https://ghichu.000webhostapp.com/api/api/qlhv/delete";

  //Create constructor to get Http instance
  constructor(private http: Http) {
  }

  //Fetch all articles
  getAllQlhv(): Observable<Qlhv[]> {
    return this.http.get(this.qlhvUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addQlhv(dkhn: Qlhv): Observable<any[]>{
    return this.http.post(this.qlhvAddUrl,dkhn).map((response:Response)=>response.json());
  }

  //Create dkhn
  createQlhv(dkhn: Qlhv): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: cpHeaders }); 
    return this.http.post(this.qlhvAddUrl, dkhn, options)
      .map(success => success.status)
      .catch(this.handleError);
  }

  // //Fetch article by id
  // getArticleById(articleId: string): Observable<Dkhn> {
  //   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: cpHeaders });
  //   console.log(this.articleUrl + "/" + articleId);
  //   return this.http.get(this.articleUrl + "/" + articleId)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  //Update dkhn
  updateQlhv(dkhn: Qlhv): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.qlhvUpdateUrl + "/" + dkhn.stt, dkhn, options)
      .map(success => success.status)
      .catch(this.handleError);
  }


  //Delete dkhn	
  deleteQlhvById(id: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.qlhvDeleteUrl + "/" + id,null,options)
      .map(success => success.status)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
