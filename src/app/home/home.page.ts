import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '../services/storage';
import { Task } from '../models/task';
import { Category } from '../models/category';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class HomePage implements OnInit {
  tasks: Task[] = [];
  categories: Category[] = [];
  
  // Variables para la interfaz
  newTaskTitle: string = '';
  newTaskCategoryId: string = ''; 
  filterCategoryId: string = 'all'; 

  constructor(
    private storageService: Storage,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.tasks = this.storageService.obtenerTarea();
    this.tasks.sort((a, b) => b.createdAt - a.createdAt);
    this.categories = this.storageService.obtenerCategorias();
  }

  get filteredTasks() {
    if (this.filterCategoryId === 'all') return this.tasks;
    return this.tasks.filter(t => t.categoryId === this.filterCategoryId);
  }

  anadirTarea() {
    if (this.newTaskTitle.trim().length === 0) return;

    const newTask: Task = {
      id: this.storageService.generarId(),
      title: this.newTaskTitle.trim(),
      completed: false,
      createdAt: Date.now(),
      categoryId: this.newTaskCategoryId || undefined
    };

    this.tasks.unshift(newTask);
    this.storageService.guardarTarea(this.tasks);
    
    // Limpiamos los inputs
    this.newTaskTitle = '';
    this.newTaskCategoryId = ''; 
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.storageService.guardarTarea(this.tasks);
  }

  eliminarTarea(taskId: string) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.storageService.guardarTarea(this.tasks);
  }

 
  async anCategory() {
    const alert = await this.alertController.create({
      header: 'Nueva Categoría',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Ej. Trabajo, Hogar etc..'
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data:any) => {
            if (data.name.trim()) {
              const newCat: Category = {
                id: this.storageService.generarId(),
                name: data.name.trim()
              };
              this.categories.push(newCat);
              this.storageService.guardarCategorias(this.categories);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  obtenerNombreCategoria(id?: string): string {
    if (!id) return '';
    const cat = this.categories.find(c => c.id === id);
    return cat ? cat.name : '';
  }
}