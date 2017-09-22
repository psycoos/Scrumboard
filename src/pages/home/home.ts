import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TaskService } from '../../providers/task/task.service';
import { TaskPage } from '../task/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks:{title: string, points: number}[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService
  ) {

  }

title: string = 'R&I';
desc: string = 'Onderzoek doen naar computers';


  ionViewWillEnter() {
    console.log('HomePage')
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks)
  }
  onLoadNewTask()  {
    this.navCtrl.push(TaskPage);
  }
}

