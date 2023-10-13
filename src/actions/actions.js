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

export const setAge = age => {
  return {
    type: 'SET_AGE',
    payload: age,
  };
};
