import {logIn, logOut} from './helpers'

export const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
          logIn(action.user)
        return state;
        
      case 'LOGOUT':
        logOut();
        return state;
        
      default:
        return state;
    }
  } 