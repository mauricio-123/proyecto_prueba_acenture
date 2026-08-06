import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root',
})
export class Storage {

  private readonly TASKS_KEY = 'todo_tareas';
  private readonly CATEGORIES_KEY = 'todo_cateristicas';

  obtenerTarea(): Task[] {
    const tasks = localStorage.getItem(this.TASKS_KEY);
     return tasks ? JSON.parse(tasks) : [];
  }

  guardarTarea(tasks: Task[]): void {
    localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
  }

  obtenerCategorias(): Category[] {
    const categories = localStorage.getItem(this.CATEGORIES_KEY);
    return categories ? JSON.parse(categories) : [];
  }

  guardarCategorias(categories: Category[]): void {
    localStorage.setItem(this.CATEGORIES_KEY, JSON.stringify(categories));
  }

  generarId(): string {
    var fecha = Date.now().toString(36);
    return Math.random().toString(36).substring(2, 9) + fecha;
  }
  
}
