const berlinReducer = (state = 0, action) => {
  switch (action.type) {
    case "EXPENSE_BERLIN":
      return 600;
    default:
      return "";
  }
};

export default berlinReducer;
