import { combineReducers } from 'redux';
import { USER_LOADED_SUCCESS, USER_LOADED_FAIL } from '../actions/types';
import auth from './auth';

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

const initialAgeState = {
  selectedAge: '',
};

const ageReducer = (state = initialAgeState, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, selectedAge: action.payload };
    default:
      return state;
  }
};

const initialUserState = {
  userInfo: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        userInfo: null,
        loading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth,
  user: userReducer,
  option: optionReducer,
  gender: genderReducer,
  mbti: mbtiReducer,
  age: ageReducer,
});

export default rootReducer;
