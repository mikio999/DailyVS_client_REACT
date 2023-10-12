import { combineReducers } from 'redux';

const initialOptionState = {
  selectedOption: '',
};

const optionReducer = (state = initialOptionState, action) => {
  switch (action.type) {
    case 'SET_OPTION':
      return { ...state, selectedOption: action.payload };
    default:
      return state;
  }
};

const initialGenderState = {
  selectedGender: '',
};

const genderReducer = (state = initialGenderState, action) => {
  switch (action.type) {
    case 'SET_GENDER':
      return { ...state, selectedGender: action.payload };
    default:
      return state;
  }
};

const initialMBTIState = {
  selectedMBTI: '',
};

const mbtiReducer = (state = initialMBTIState, action) => {
  switch (action.type) {
    case 'SET_MBTI':
      return { ...state, selectedMBTI: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  option: optionReducer,
  gender: genderReducer,
  mbti: mbtiReducer,
});

export default rootReducer;
