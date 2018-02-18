export const setJson = (json) => {
  return {
    type: 'SET_JSON',
    payload: json
  };
};

export const setError = (error) => {
  return {
    type: 'SET_ERROR',
    payload: error
  };
};
