import { Task } from '../entities/task';

class TaskRepositories {
  async saveTask(task: Omit<Task, "id">): Promise<Omit<Task, "id">> {
    return task;
  }

  async listAll(id: string): Promise<Task> {
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
