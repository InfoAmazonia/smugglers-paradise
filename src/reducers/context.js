import {
  CONTEXT_UPDATE,
  CONTEXT_RESET
} from 'actions/context';

import {
  REHYDRATE
} from 'redux-persist';

import {
  LOCATION_CHANGE
} from 'react-router-redux';

var referPath;

const initialState = {
  lastPath: false,
  aboutPath: false,
  sharePath: false,
  dataPath: false,
  storyScroll: {},
  storyHeight: {}
};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case CONTEXT_UPDATE : {
      state = Object.assign({}, initialState, state, {
        [action.context]:
          (typeof action.data == 'object' ? {
            ...state[action.context],
            ...action.data
          } : action.data)
      });
      return state;
    }
    case CONTEXT_RESET : {
      return Object.assign({}, initialState);
    }
    case LOCATION_CHANGE : {
      if(action.payload.pathname !== '/' && action.payload.pathname !== '/about' && action.payload.pathname !== '/share' && action.payload.pathname !== '/data') {
        referPath = action.payload.pathname;
        return Object.assign({}, initialState, state, {
          lastPath: action.payload.pathname,
          aboutPath: '/about',
          sharePath: '/share',
          dataPath: '/data'
        });
      } else if (action.payload.pathname == '/about') { 
        return Object.assign({}, initialState, state, {
          aboutPath: referPath,
        });
      } else if (action.payload.pathname == '/share') { 
        return Object.assign({}, initialState, state, {
          sharePath: referPath,
        });
      } else if (action.payload.pathname == '/data') { 
        return Object.assign({}, initialState, state, {
          dataPath: referPath,
        });
      }
      return state;
    }
    default : {
      return state;
    }
  }
};
