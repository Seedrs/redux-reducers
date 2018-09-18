const mergeObject = (MERGE_ACTION, key = undefined) => (state = {}, action) => {
  switch (action.type) {
    case MERGE_ACTION:
      if (key) {
        return { ...state, ...action.payload.entities[key] };
      } else {
        return { ...state, ...action.payload };
      }
    default:
      return state;
  }
};

export default mergeObject;
