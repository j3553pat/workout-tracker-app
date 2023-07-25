import { combineReducers } from 'redux'

const user = (state = [], action) => {
  switch (action.type) {
    case "ADD_USERINFORMATION":
      return [...state, action.value];
    case "REMOVE_USERINFORMATION":
      const userInformation = [...state];
      userInformation.splice(action.value, 1);
      return userInformation;
    default:
      return state;
  }
};

const calorieIntake = ( state = [], action) => {
  switch(action.type) {
    case 'ADD_CALORIES':
      return [...state, action.value];
      case 'REMOVE_CALORIES':
      const userCalories = [...state];
      userCalories.splice(action.value, 1);
      return userCalories;
    default:
      return state;
  }
}

const foodIntake = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FOODINTAKE':
      return [...state, action.value];
      case 'REMOVE_FOODINTAKE':
        const userFoodIntake = [...state]
        userFoodIntake.splice(action.value, 1)
        break
      default: 
        return state
  }
}

const exerciseEntry = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EXERCISEENTRY':
      return [...state, action.value];
      case 'REMOVE_EXERCISEENTRY':
        const userExercise = [...state]
        userExercise.splice(action.value, 1)
        break
      default:
        return state
  }
}
  
  export default combineReducers({ user, calorieIntake, foodIntake, exerciseEntry })