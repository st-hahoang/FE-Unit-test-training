import { JWTService } from './jwt.service';
import { IUtilitiesAuth } from './utilites.service';

export interface IAuth {
  signIn(body: any): any;
  signOut(): any;
  isAuthenticated(): any;
  isCurrentUser(uid: any): any;
  userRole(): any;
  getUserInfo(): any;
}

const strategies = {
  JWT: JWTService,
  __default__: JWTService
};

export class AuthService implements IAuth, IUtilitiesAuth {
  constructor(type = 'JWT') {
    const DynamicAuth = strategies[type];
    Object.setPrototypeOf(this, new DynamicAuth());
  }

  setToken(data?: any): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  getToken(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  removeToken(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  signIn(body): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  signOut(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  isAuthenticated(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  isCurrentUser(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  userRole(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

  getUserInfo(): any {
    throw new Error('Method will be override with correct type of Auth');
  }

}
