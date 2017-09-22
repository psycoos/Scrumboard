import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import {NgForm} from '@angular/forms';
import { TaskService } from '../../providers/task/task.service'
/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  onAddTask(value: {title: string, points: number}) {
    this.taskService.addTask(value);
    this.navCtrl.pop();
  }
}
