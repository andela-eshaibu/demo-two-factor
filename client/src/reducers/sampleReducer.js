const actionTypes = {
  INCREMENT: 'INCREMENT',
};

const initialState = {
  count: 0
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      state = {
        ...state,
        count: state.count + 1
      };
      break;
    default:
      return state;
  }
  return state;
};

export default sampleReducer;
