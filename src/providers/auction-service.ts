import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuctionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuctionService {
  data: string;

  constructor(public http: Http) {
    console.log('Hello AuctionService Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      var data = JSON.stringify({
        Username : 'guido+1@grafia.fr',
        Password: 'gitgitgit'
      });

      this.http.get('user.json')
        .map(res => res.json())
        .subscribe(data => {

          debugger;
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
