export default ({ dispatch }) => (next) => (action) => {
  debugger;
  // Check if it has a promise? wait : send the action to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // If promise? get its data & create a new action and dispatch it
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
