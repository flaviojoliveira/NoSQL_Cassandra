import { Task } from '../entities/task';

class TaskRepositories {
  async saveTask(task: Task): Promise<Task> {
    return task;
  }

  async getById(id: string): Promise<Task> {
    return new Task();
  }

  async deleteById(id: string): Promise<Task> {
    return new Task();
  }

  async updateById(id: string): Promise<Task> {
    return new Task();
  }
}

export { TaskRepositories };
