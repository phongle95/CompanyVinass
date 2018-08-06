import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Dkhn } from '../model/dkhn';
import { Subject } from '../model/subject';

@Injectable()
export class DkhnService {
  //URL for CRUD operations 
  // //for local
  dkhnUrl = "http://localhost:8080/api/api/dkhn";
  dkhnAddUrl = "http://localhost:8080/api/api/dkhn/add";
  dkhnUpdateUrl = "http://localhost:8080/api/api/dkhn/update";
  dkhnDeleteUrl = "http://localhost:8080/api/api/dkhn/delete";

  //for deploy
  // dkhnUrl = "https://ghichu.000webhostapp.com/api/api/dkhn";
  // dkhnAddUrl = "https://ghichu.000webhostapp.com/api/api/dkhn/add";
  // dkhnUpdateUrl = "https://ghichu.000webhostapp.com/api/api/dkhn/update";
  // dkhnDeleteUrl = "https://ghichu.000webhostapp.com/api/api/dkhn/delete";

  //Create constructor to get Http instance
  constructor(private http: Http) {
  }

  getAllSubject(): Subject[] { 
    return [
      { maMon: 'T', tenMon: 'TOÁN' },
      { maMon: 'V', tenMon: 'VĂN' },
      { maMon: 'L', tenMon: 'LÝ' },
      { maMon: 'H', tenMon: 'HÓA' },
      { maMon: 'I', tenMon: 'TIN' },
      { maMon: 'A', tenMon: 'TNC' },
      { maMon: 'B', tenMon: 'TƯ DUY' },
      { maMon: 'E', tenMon: 'ANH' },
      { maMon: 'G', tenMon: 'AVGT' },
      { maMon: '1', tenMon: 'TG1' },
      { maMon: '2', tenMon: 'TG2' },
      { maMon: '3', tenMon: 'TG3' },
      { maMon: '4', tenMon: 'TG4' },
      { maMon: '5', tenMon: 'TG5' },
      { maMon: '6', tenMon: 'TG6' },
      { maMon: '7', tenMon: 'TG7' },
      { maMon: '8', tenMon: 'TG8' },
      { maMon: '9', tenMon: 'TG9' },
      { maMon: 'S', tenMon: 'STARTER' },
      { maMon: 'M', tenMon: 'MOVER' },
      { maMon: 'F', tenMon: 'FLYER' },
      { maMon: 'P', tenMon: 'PET' },
      { maMon: 'K', tenMon: 'KET' },
      { maMon: 'U', tenMon: 'AVMN' },
      { maMon: 'V', tenMon: 'AVDL1' },
      { maMon: 'X', tenMon: 'AVDL2' },
      { maMon: 'Y', tenMon: 'AVDL3' },
      { maMon: 'Z', tenMon: 'DỰ THÍNH' },
      { maMon: 'W', tenMon: 'KÈM' }
    ];
  }

  //Fetch all articles
  getAllDkhn(): Observable<Dkhn[]> {
    return this.http.get(this.dkhnUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addDkhn(dkhn: Dkhn): Observable<any[]> {
    return this.http.post(this.dkhnAddUrl, dkhn).map((response: Response) => response.json());
  }

  //Create dkhn
  createDkhn(dkhn: Dkhn): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.dkhnAddUrl, dkhn, options)
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
  updateDkhn(dkhn: Dkhn): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.dkhnUpdateUrl + "/" + dkhn.stt, dkhn, options)
      .map(success => success.status)
      .catch(this.handleError);
  }


  //Delete dkhn	
  deleteDkhnById(id: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.dkhnDeleteUrl + "/" + id, null, options)
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
