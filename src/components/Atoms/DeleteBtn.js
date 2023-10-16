import React, { useRef } from 'react';
import useClickEffect from '../../utils/hooks/useClickEffect';

function DeleteBtn({ onClick }) {
  const ref = useRef(null);
  const { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML } =
    useClickEffect(ref);

  return (
    <img
      src="/images/Buttons/delete.png"
      style={{
        width: 35,
        height: 35,
        transition: '0.3s',
      }}
      ref={ref}
      onMouseDown={handleBtnMD}
      onMouseUp={handleBtnMU}
      onMouseEnter={handleBtnME}
      onMouseLeave={handleBtnML}
      onClick={onClick}
    />
  );
}

export default DeleteBtn;
