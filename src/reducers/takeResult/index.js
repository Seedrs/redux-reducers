const takeResult = SUCCESS_TYPE => (state = null, action) => {
  switch (action.type) {
    case SUCCESS_TYPE:
      return action.payload.result.result;
    default:
      return state;
  }
};

export default takeResult;
