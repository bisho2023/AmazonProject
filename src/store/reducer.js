const getLocalCartData = () => {
  let newCartData = localStorage.getItem("cart");
  if (newCartData === []) {
    return [];
  } else {
    // let c = [];
    // c.push(JSON.parse(newCartData));
    // return c;
    JSON.parse(newCartData);
  }
};
const InitialState = {
  card: [],
  // card: getLocalCartData(),
  count: 0,
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
    default:
      return state;
  }
}
