import React from 'react';
import {  waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserService } from '../../../core/services/user.service';
import renderWithProviders from '@app/shared/unit-test/unitTest';
import UserList from './UserList';
import { act } from 'react-dom/test-utils';

const mockErrorData = {
  response: {
    data: {
      'name':'Bad request',
      'status':'400',
      'message':'Bad request',
      'errors':['Bad request']
    }
  }
};

const mockListUser = [
  {
    id: '01',
    name: 'User 1'
  },
  {
    id: '02',
    name: 'User 2'
  }
];

const mockGetUsersFunc = jest.spyOn(UserService.prototype, 'getUsers');

describe('<UserList />', () => {
  describe('Loading working correctly', () => {
    test('Loading rendering corretly', async () => {
      const { queryByTestId } = renderWithProviders(<UserList />);

      expect(queryByTestId('loading')).toBeInTheDocument();
      expect(queryByTestId('user-list')).toBeNull();
      expect(queryByTestId('empty')).toBeNull();
    });
  });

  describe('User List rendering correctly', () => {
    describe('List is empty', () => {
      test('Empty rendering correctly', async () => {
        mockGetUsersFunc.mockResolvedValue([]);

        const { queryByTestId } = renderWithProviders(<UserList />);

        expect(queryByTestId('loading')).toBeInTheDocument();
        expect(queryByTestId('user-list')).toBeNull();
        expect(queryByTestId('empty')).toBeNull();

        await waitFor(() => expect(queryByTestId('empty')).toBeInTheDocument());

        expect(queryByTestId('loading')).toBeNull();
        expect(queryByTestId('user-list')).toBeNull();
      });
    });

    describe('List has data', () => {
      test('User list rendered', async () => {
        mockGetUsersFunc.mockResolvedValue(mockListUser);
        const { queryByTestId } = renderWithProviders(<UserList />);

        expect(queryByTestId('loading')).toBeInTheDocument();
        expect(queryByTestId('user-list')).toBeNull();
        expect(queryByTestId('empty')).toBeNull();

        await waitFor(() => expect(queryByTestId('user-list')).toBeInTheDocument());

        expect(queryByTestId('loading')).toBeNull();
        expect(queryByTestId('empty')).toBeNull();
      });

      test('User list data rendering correctly', async () => {
        mockGetUsersFunc.mockResolvedValue(mockListUser);

        const { queryByTestId } = renderWithProviders(<UserList />);

        await waitFor(() => expect(queryByTestId('user-list')).toBeInTheDocument());

        mockListUser.forEach(user => {
          const id = user.id;
          expect((queryByTestId(`user-${id}`) as HTMLLinkElement).href).toMatch(`/users/${id}`);
        });
      });
    });
  });

  describe('Get User List failed', () => {
    test('User list data cannot get', async () => {
      mockGetUsersFunc.mockRejectedValue(mockErrorData);

      const { queryByTestId, getByText } = renderWithProviders(<UserList />);

      expect(queryByTestId('loading')).toBeInTheDocument();

      expect(mockGetUsersFunc).toBeCalled();
      await waitFor(() => expect(queryByTestId('error')).toBeInTheDocument());

      expect(getByText('Error')).toBeInTheDocument();
      expect(queryByTestId('loading')).toBeNull();
    });
  });

});
