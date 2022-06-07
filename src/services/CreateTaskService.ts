import { TaskRepositories } from "../repositories/TaskRepository";

interface ICreateTaskRequest {
  name: string;
  description: string;
}

class CreateTaskService { 
  async execute({ name, description }: ICreateTaskRequest ) {
    const categoriesRepository = new TaskRepositories();
    const id = "12121"

    const category = categoriesRepository.saveTask({ id, name, description });

    return category;
  }
}

export { CreateTaskService  }