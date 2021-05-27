const spiceReducer = (state = "", action) => {
  switch (action.type) {
    case "SAFFRON":
      return "Saffron";
    case "PARSLEY":
      return "Parsley";
    case "THYME":
      return "Thyme";
    default:
      return "";
  }
};

export default spiceReducer;
