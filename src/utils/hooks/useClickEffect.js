function useClickEffect(ref, opacity = 1) {
  const handleBtnMD = () => {
    if (ref.current && opacity === 1) {
      ref.current.style.transform = 'scale(1)';
    }
  };
  const handleBtnMU = () => {
    if (ref.current && opacity === 1) {
      ref.current.style.transform = 'scale(1.1)';
    }
  };
  const handleBtnME = () => {
    if (ref.current && opacity === 1) {
      ref.current.style.transform = 'scale(1.1)';
    }
  };
  const handleBtnML = () => {
    if (ref.current && opacity === 1) {
      ref.current.style.transform = 'scale(1)';
    }
  };
  return { handleBtnMD, handleBtnMU, handleBtnME, handleBtnML };
}
export default useClickEffect;
