import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

const Sending = () => {
  return (
    <div>
      <ProgressBar
        height="50"
        width="50"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#17355a"
        barColor="#457c9e"
      />
    </div>
  );
};
export default Sending;
