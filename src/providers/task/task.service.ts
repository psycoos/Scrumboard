export class TaskService {
  private tasks: {title: string, points: number}[] = [];

  addTask(task: {title: string, points: number}) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks.slice();
  }
}
