export const setOption = option => {
  return {
    type: 'SET_OPTION',
    payload: option,
  };
};

export const setChoice = choice => {
  return {
    type: 'SET_CHOICE',
    payload: choice,
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

export const setCategory = category => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  };
};

export const setCategoryList = categoryList => {
  return {
    type: 'SET_CATEGORYLIST',
    payload: categoryList,
  };
};

export const setEmail = email => {
  return {
    type: 'SET_EMAIL',
    payload: email,
  };
};

export const setNickname = nickname => {
  return {
    type: 'SET_NICKNAME',
    payload: nickname,
  };
};
