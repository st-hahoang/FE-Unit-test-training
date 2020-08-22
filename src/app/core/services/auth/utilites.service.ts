export interface IUtilitiesAuth {
  setToken(data?: any): void;
  getToken(): void;
  removeToken(): void;
}

export class AuthUtilitiesService implements IUtilitiesAuth {
  ACCESS_TOKEN = 'token';

  setToken(data?: any) {
    if (data) {
      localStorage.setItem(this.ACCESS_TOKEN, data.accessToken);
    }
  }

  getToken() {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  removeToken() {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }
}
