import { TaskRepositories } from "../repositories/TaskRepository";

interface ICreateTaskRequest {
  name: string;
  description: string;
}

class CreateTaskService { 
  async execute({ name, description }: ICreateTaskRequest ) {
    const categoriesRepository = new TaskRepositories();

    const category = categoriesRepository.saveTask({ name, description });

    return category;
  }
}

export { CreateTaskService  }