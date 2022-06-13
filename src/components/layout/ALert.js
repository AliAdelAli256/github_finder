import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const ALert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
    return (
        alert !== null && (
            <div className={`alert alert-light`}>
              <i className='fas fa-info-circle' /> {alert}
            </div>
          )
    );
};

export default ALert;