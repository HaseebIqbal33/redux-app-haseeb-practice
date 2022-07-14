const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return parseInt(state) + parseInt(action.payload);
  } else if (action.type === "withdraw") {
    if (parseInt(state) - parseInt(action.payload) >= 0)
      return parseInt(state) - parseInt(action.payload);
  } else {
    return parseInt(state);
  }
};

export default reducer;
