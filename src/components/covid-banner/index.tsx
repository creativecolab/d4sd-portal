import React, { useState } from 'react';
import { Alert } from '@d4sd/components';
import './style.less';

const CovidBanner = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleClose = (): void => {
    setVisible(false);
  };

  return (
    <div>
      {visible ? (
        <Alert
          message="Alert Message Text" type="info" closable
          afterClose={handleClose}
        />
      ) : null}
    </div>
  );
};
export default CovidBanner;
