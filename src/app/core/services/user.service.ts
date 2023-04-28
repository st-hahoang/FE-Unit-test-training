import { ApiService } from './api.service';

export class UserService {
  http = new ApiService();

  constructor() {}

  getUsers() {
    return this.http.get([`https://jsonplaceholder.typicode.com/users/`]);
  }

  getUserDetail(id: string | number) {
    return this.http.get([`https://jsonplaceholder.typicode.com/users/${id}`]);
  }
}
