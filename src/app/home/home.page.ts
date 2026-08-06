import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '../services/storage';
import { Task } from '../models/task';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class HomePage implements OnInit {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private storageService: Storage) {}

  ngOnInit() {
    this.loadTasks();
  }

 
  loadTasks() {
    this.tasks = this.storageService.obtenerTarea();
    this.tasks.sort((a, b) => b.createdAt - a.createdAt);
  }


  addTask() {
    if (this.newTaskTitle.trim().length === 0) return;

    const newTask: Task = {
      id: this.storageService.generarId(),
      title: this.newTaskTitle.trim(),
      completed: false,
      createdAt: Date.now()
    };

    this.tasks.unshift(newTask); 
    this.storageService.guardarTarea(this.tasks); 
    this.newTaskTitle = ''; 
  }

 
  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.storageService.guardarTarea(this.tasks);
  }

 
  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.storageService.guardarTarea(this.tasks);
  }
}
