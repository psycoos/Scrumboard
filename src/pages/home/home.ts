import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TaskPage } from '../task/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  changePage() {
    this.navCtrl.push(TaskPage)
  }

  ionViewDidLoad() {
    console.log('HomePage')
    console.log(this.navParams.get('title'))
  }

}
