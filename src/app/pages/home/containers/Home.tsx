import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@app/store';
import { updateUserInfo } from '@app/core/auth/auth.slice';

const Home = (): JSX.Element => {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();

  const onUpdateProfile = () => {
    dispatch(
      // eslint-disable-next-line camelcase
      updateUserInfo({ display_name: 'Trang Nguyen T.' })
    );
  };

  return (
    <div>
      <h1>{t('pages.homepage')}</h1>
      <button onClick={onUpdateProfile}>Update My Profile</button>
    </div>
  );
};

export default Home;
