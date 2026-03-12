import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskService, Task } from '../services/task.service';

@Component({
    selector: 'app-task-management',
    templateUrl: './task-management.page.html',
    styleUrls: ['./task-management.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule]
})
export class TaskManagementPage {
    // Inject the service
    taskService = inject(TaskService);

    // Local state for the input field
    newTaskTitle = '';

    // Access signals from the service
    tasks = this.taskService.tasks;
    completedCount = this.taskService.completedCount;
    totalCount = this.taskService.totalCount;

    addTask() {
        if (this.newTaskTitle.trim()) {
            this.taskService.addTask(this.newTaskTitle);
            this.newTaskTitle = '';
        }
    }

    toggleTask(task: Task) {
        this.taskService.toggleTask(task.id);
    }

    removeTask(task: Task) {
        this.taskService.removeTask(task.id);
    }
}
