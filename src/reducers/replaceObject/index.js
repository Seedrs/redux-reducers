const replaceObject = (MERGE_ACTION, key = undefined) => (state = {}, action) => {
  switch (action.type) {
    case MERGE_ACTION:
      if (key) {
        return { ...action.payload.entities[key] };
      } else {
        return { ...action.payload };
      }
    default:
      return state;
  }
};

export default replaceObject;
