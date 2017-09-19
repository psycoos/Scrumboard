import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskPage } from '../task/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  changePage() {
    this.navCtrl.push(TaskPage)
  }

}
