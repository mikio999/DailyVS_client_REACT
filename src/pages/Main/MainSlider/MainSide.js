import React from 'react';

export const MainSliderSideLeft = () => {
  return (
    <div className="mainSlider-side mainSlider-left">
      <img src={require('../../../assets/MainSide/Evil.png')} alt="악마" />
      <img src={require('../../../assets/MainSide/Angel.png')} alt="천사" />
      <img src={require('../../../assets/MainSide/Ellipse.png')} alt="원" />
      <img src={require('../../../assets/MainSide/Ellipse.png')} alt="원" />
    </div>
  );
};
export const MainSliderSideRight = () => {
  return (
    <div className="mainSlider-side mainSlider-right">
      <img
        src={require('../../../assets/MainSide/Ellipse.png')}
        alt="원"
        style={{ width: 50 }}
      />
      <img
        src={require('../../../assets/MainSide/Evil.png')}
        alt="악마"
        style={{ width: 50 }}
      />
      <img
        src={require('../../../assets/MainSide/Angel.png')}
        alt="천사"
        style={{ width: 50 }}
      />
      <img
        src={require('../../../assets/MainSide/Ellipse.png')}
        alt="원"
        style={{ width: 50 }}
      />
      <img
        src={require('../../../assets/MainSide/Angel.png')}
        alt="천사"
        style={{ width: 50 }}
      />
    </div>
  );
};
