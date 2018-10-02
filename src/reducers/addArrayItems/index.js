const addArrayItems = (MERGE_ACTION, key = null) => (state = [], action) => {
  switch (action.type) {
    case MERGE_ACTION: {
      const entry = (key) ? action.payload[key] : action.payload;
      const itemsToAdd = Array.isArray(entry) ? entry : [entry];

      return [...new Set([...state, ...itemsToAdd])];
    }
    default:
      return state;
  }
};

export default addArrayItems;
