import Task from "./Task";

export default class TaskList {
  constructor(obj) {
    this.tasksArray = obj.tasks;
  }

  static create(taskRawData) {
    const tasks = taskRawData.map(taskItem => {
      return Task.create(taskItem);
    });

    const config = {
      tasks
    };

    return new TaskList(config);
  }

  task(index){
    return this.tasksArray[index];
  }

  getAllTasksCount() {
    return this.tasksArray.length;
  }

  loadTasks(data){
    this.tasksArray.forEach(task => {
      data.forEach(d => {
        if (task.id === d.id) {
          task.changeData(d);
        }
      })
    })
  }

  checkAnswer(index, answer) {
    return this.tasksArray[index].answers.includes(answer);
  }

  isAllDone(){
    return this.tasksArray.every(task => task.done);
  }

  countHintTask(){
    return this.tasksArray.reduce((count, task) => {
      return task.hint ? count + 1 : count;
    }, 0)
  }

  countDoneTask(){
    return this.tasksArray.reduce((count, task) => {
      return task.done ? count + 1 : count;
    }, 0)
  }

  saveArray(){
    const data = [];
    this.tasksArray.forEach(task => {
      data.push(task.save());
    });
    return data;
  }

  reset(){
    this.tasksArray.forEach(task => {
      task.reset();
    })
  }
}
