import { AuthStorageService } from './../authStorage.service';
import { Authen } from './Authen';

describe('Class Authen', () => {
  const user = new Authen();
  describe('Login', () => {
    test('Login has been called', () => {
      const mockSetToken = jest.spyOn(AuthStorageService.prototype, 'setToken');
      user.login();
      expect(mockSetToken).toBeCalledTimes(1);
      expect(mockSetToken).toBeCalledWith('token');
    });
  });
  describe('Logout', () => {
    test('Logout has been called', () => {
      const mockRemoveToken = jest.spyOn(AuthStorageService.prototype, 'removeToken');
      user.logout();
      expect(mockRemoveToken).toBeCalledTimes(1);
      expect(mockRemoveToken).toBeCalledWith();
    });
  });
});
