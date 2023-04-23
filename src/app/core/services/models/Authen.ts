import { AuthStorageService } from './../authStorage.service';

export class Authen {

  login() {
    const authService = new AuthStorageService();
    authService.setToken('token');
  }

  logout() {
    const authService = new AuthStorageService();
    authService.removeToken();
  }
}
