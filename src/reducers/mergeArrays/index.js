const mergeArrays = MERGE_ACTION => (state = [], action) => {
  switch (action.type) {
    case MERGE_ACTION:
      return [...new Set([...state, action.payload.result])];
    default:
      return state;
  }
};

export default mergeArrays;
