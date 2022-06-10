import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoriesService = new CreateTaskService();

    const task = await createCategoriesService.execute({ name, description });

    return response.status(200).json(task);
  }
}

export { CreateTaskController }