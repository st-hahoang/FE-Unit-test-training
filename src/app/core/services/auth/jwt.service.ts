import { IAuth } from './auth.service';
import { AuthUtilitiesService } from './utilites.service';
import { ApiService } from '../api.service';
import * as jwt from 'jsonwebtoken';
import { ENDPOINT } from '@config/endpoint';

export class JWTService extends AuthUtilitiesService implements IAuth {
  http = new ApiService();

  constructor() {
    super();
  }

  async signIn(body: any) {
    try {
      const res = await this.http.post([ENDPOINT.auth.login], body);
      this.setToken(res);
      return res;
    } catch (e) {
      throw e;
    }
  }

  signOut() {
    this.removeToken();
  }

  isAuthenticated() {
    const { isTokenValid } = this._verifyJWTToken();
    return isTokenValid;
  }

  isCurrentUser(uid: string) {
    const userInfo = this.getUserInfo();
    return userInfo ? uid === userInfo.uid : false;
  }

  userRole() {
    const userInfo = this.getUserInfo();
    console.log(userInfo);
    return userInfo ? userInfo.role : undefined;
  }

  getUserInfo() {
    const { isTokenValid, token } = this._verifyJWTToken();
    if (isTokenValid) {
      return jwt.decode(token).data;
    } else {
      return null;
    }
  }

  private _verifyJWTToken() {
    const token: string | boolean = this.getToken();
    const isTokenValid: boolean = jwt.decode(token);
    if (!isTokenValid) {
      this.removeToken();
    }
    return {isTokenValid, token};
  }
}
