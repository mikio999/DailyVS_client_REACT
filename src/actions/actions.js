export const setOption = option => {
  return {
    type: 'SET_OPTION',
    payload: option,
  };
};

export const setGender = gender => {
  return {
    type: 'SET_GENDER',
    payload: gender,
  };
};

export const setMBTI = mbti => {
  return {
    type: 'SET_MBTI',
    payload: mbti,
  };
};
