import { v4 as uuid } from 'uuid';

class Task {
  id: string;

  name: string;

  description: string;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Task }