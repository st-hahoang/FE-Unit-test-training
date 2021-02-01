import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LoadingIcon from '@assets/images/loading.svg';

const LoadingIndicator = () => {
  return (
    <div className="page page-loading">
      <span className="loading-indicator">
        <LoadingIcon />
      </span>
    </div>
  );
};

const ErrorShowing = (props) => {
  // TODO: using i18n translate
  const { t } = useTranslation('dialogs');

  return (
    <div className="page-error">
      <div className="pd-3 txt-break-all txt-center">
        <h3 className="page-title txt-lg mb-5">{props.title}</h3>
        <p className="txt-lg">{props.message}</p>
      </div>
    </div>
  );
};

export const PageRenderer = (Wrapped) => {

  return (props: any) => {

    // Prevent flash dummy screen when before loading screen work
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
      setIsFetching(false);
    }, []);

    return (
      (props.error) ? (
        <ErrorShowing {...props.error} />
      ) : (
        (isFetching || props.isLoading) ? (
          <LoadingIndicator />
        ) : (
          <Wrapped {...props.data} />
        )
      )
    );
  };
};

export default PageRenderer;
