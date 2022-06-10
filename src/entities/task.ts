import { v4 as uuid } from 'uuid';

class Task {
  id: string;

  name: string;

  description: string;

  status?: boolean;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }

    if(!this.status) {
      this.status = true;
    }
  }
}

export { Task }