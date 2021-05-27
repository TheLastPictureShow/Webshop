const spiceReducer = (state = "", action) => {
  return {
    product: action.type,
    price: action.data,
  };
};

export default spiceReducer;
