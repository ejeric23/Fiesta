import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PartyProvider } from '../../../providers/party/party';
import { Party } from '../../../interfaces/Party';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-party-info',
  templateUrl: 'party-info.html',
})
export class PartyInfoPage {

  party: Party;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public view: ViewController,
    public partyProvider: PartyProvider, ) { this.party = navParams.get('party') }

  closeModal() {
    this.view.dismiss();
  }

  parseDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  }


}
