import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AucService} from '../../providers/auc-service';


@Component({
  selector: 'list-page',
  templateUrl: 'list.html',
  providers: [AucService]
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  pet : string;
  auction: Array<{id: string,  name: string}>;
  constructor(public AucService:AucService,public navCtrl: NavController, public navParams: NavParams) {
    this.loadUser();
    this.pet = 'tab1';
  }

  loadUser(){
    this.AucService.autoLogin().subscribe(
        data => {
          this.getAuctionList(data.access_token);
        },
        err => {
            console.log(err);
        }
    );
  }

  getAuctionList(aucdata){
    this.AucService.auctionLoad(aucdata).subscribe(
      data => {
        this.auction = data.response;
      },
      err => {
          console.log(err);
      }
    );
  }


}
