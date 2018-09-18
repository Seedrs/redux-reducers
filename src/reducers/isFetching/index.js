const isFetching = ([
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE
], initialState = false) => (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TYPE:
      return true;
    case SUCCESS_TYPE:
    case FAILURE_TYPE:
      return false;
    default:
      return state;
  }
};

export default isFetching;
