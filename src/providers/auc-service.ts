import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AucService {
  data: string;
  aucdata: string;
  token : string;
  constructor(public http: Http) {
    console.log('Hello AucService Provider');
  }

  autoLogin() {
    var url = 'http://api-dev.loisirsencheres.com/oauth2/token';
    let logdata = {
                  "grant_type": "password",
                  "client_id": "ass-www",
                  "client_secret": "secret",
                  "username": encodeURI('guido+1@grafia.fr'),
                  "password": "gitgitgit"
                };
    var response = this.http.post(url,logdata).map(res => res.json());
    return response;
  }

  auctionLoad(token) {
    var url = 'https://api-dev.loisirsencheres.com/search/?limit=20&offset=0';
    var headers = new Headers();
    var option = {'headers': { 'Authorization': 'Bearer ' + token}};
    var response = this.http.get(url,option).map(res => res.json());
    return response;
  }

}
