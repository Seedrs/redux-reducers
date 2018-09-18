const removeArrayItems = (MERGE_ACTION, key = null) => (state = [], action) => {
  switch (action.type) {
    case MERGE_ACTION: {
      const entry = (key) ? action.payload[key] : action.payload;
      const itemsToRemove = Array.isArray(entry) ? entry : [entry];

      return state.filter(item => !itemsToRemove.includes(item));
    }
    default:
      return state;
  }
};

export default removeArrayItems;
