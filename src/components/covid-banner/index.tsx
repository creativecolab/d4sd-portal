import React, { useState } from 'react';
import { Alert } from '@d4sd/components';
import { useHistory } from 'react-router-dom';
import './style.less';

const CovidBanner = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(true);
  const history = useHistory();

  const handleClose = (): void => {
    setVisible(false);
  };

  const alertMessage = ['Updates regarding the COVID-19 virus for the D4SD Community. ',
    // eslint-disable-next-line
    <a className="covid-link" onClick={(): void => history.push('/covid19')} key="covid-learn-more"><b><u>Learn more.</u></b></a>];

  return (
    <div className="covid-banner">
      {visible ? (
        <Alert
          message={alertMessage} type="warning" closable
          afterClose={handleClose}
        />
      ) : null}
    </div>
  );
};
export default CovidBanner;
