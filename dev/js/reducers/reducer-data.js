import { countNodes } from './utils';

const defaultState = {
  error: null,
  nodes: null,
};

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'SET_JSON':
      return {
        ...defaultState,
        nodes: countNodes(action.payload)
      };
      break;

    case 'SET_ERROR':
      return {
        ...defaultState,
        error: action.payload
      };
      break;
  }

  return state;
}
