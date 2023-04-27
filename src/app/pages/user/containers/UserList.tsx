import React, { useEffect, useState } from 'react';
import { deleteUser, getListUser } from '../user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state: any) => state.usersReducer.dataList);
  const { isLoading, error } = useSelector((state: any) => state.usersReducer);
  const handleDeleteUser = (id: string) => {
    dispatch(deleteUser(id));
  };

  useEffect (() => {
    dispatch(getListUser());
  }, []);

  return (
    <>
      {isLoading && <p data-testid="loading">Loading...</p>}
      <h2>User List</h2>
      {error && <p data-testid="error">Error</p>}
      <ul data-testid="user-list" className="user-list">
        {
          dataList.length ? dataList.map((item) => (
            <li data-testid="user-item" className="user-item" key={item.id}>
              Name: <Link data-testid={`user-${item.id}`} to ={`/users/${item.id}`} className='user-name'>{item?.name}</Link><br></br>
              Phone: {item.phone}<br></br>
              User name: {item.username}<br></br>
              Website  {item.website}<br></br>
              <button data-testid={`btn-delete-${item.id}`} onClick={() => handleDeleteUser(item?.id)}>Delete</button>
            </li>
          )) : (
            <p>No data to show</p>
          )
        }
      </ul>
    </>
  );
};
export default UserList;
