import { Injectable, signal, computed } from '@angular/core';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    // 1. Private signal to hold the state
    private tasksSignal = signal<Task[]>([
        { id: 1, title: 'Learn Angular Services', completed: true },
        { id: 2, title: 'Master State Management', completed: false }
    ]);

    // 2. Public readonly signal for components to consume
    // This ensures components can't modify the state directly
    tasks = this.tasksSignal.asReadonly();

    // 3. Computed signal for derived state
    completedCount = computed(() => this.tasks().filter(t => t.completed).length);
    totalCount = computed(() => this.tasks().length);

    // 4. Methods to modify state
    addTask(title: string) {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false
        };

        // Update the signal using the 'update' method
        this.tasksSignal.update(tasks => [...tasks, newTask]);
    }

    toggleTask(taskId: number) {
        this.tasksSignal.update(tasks =>
            tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    }

    removeTask(taskId: number) {
        this.tasksSignal.update(tasks => tasks.filter(task => task.id !== taskId));
    }
}
