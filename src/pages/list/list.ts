import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {AuctionService} from '../../providers/auction-service';


@Component({
  selector: 'list-page',
  templateUrl: 'list.html',
  providers: [AuctionService]
})
export class ListPage {
  public people: any;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public AuctionService: AuctionService,public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.loadPeople()
  }

  loadPeople(){
    this.AuctionService.load()
      .then(data => {
        debugger;
        this.people = data;
      });
  }

}
