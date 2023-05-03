const getLocalCartData = () => {
  return JSON.parse(localStorage.getItem("cart")).card;
};
const InitialState = {
  // card: [],
  card: getLocalCartData(),
  count: getLocalCartData().length,
  quantity: getLocalCartData().length,
};

export default function cardReducer(state = InitialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      // return {
      //   ...state,
      //   card: action.payload,
      // };
      const cc = {
        ...state,
        card: action.payload,
      };
      localStorage.setItem("cart", JSON.stringify(cc));
      return cc;
    case "SET_COUNTER":
      // return { ...state, count: action.payload };
      const c = {
        ...state,
        count: action.payload,
      };
      localStorage.setItem("cart", JSON.stringify(c));
      return c;
    case "SET_QUANTITY":
      const ccc = {
        ...state,
        quantity: action.payload,
      };
      return ccc;
    // return {
    //   ...state,
    //   quantity: [...state.quantity, action.payload],
    // };
    default:
      return state;
  }
}
