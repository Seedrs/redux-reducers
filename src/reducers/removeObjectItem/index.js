const removeObjectItem = (MERGE_ACTION, key = undefined) => (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case MERGE_ACTION: {
      const objectKey = action.payload[key];
      delete newState[objectKey];
      return newState;
    }
    default:
      return newState;
  }
};

export default removeObjectItem;
