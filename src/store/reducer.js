const InitialState = {
  card: [],
  count:0,
};
export default function cardReducer(state = InitialState, action) {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, card: action.payload };
      case "SET_COUNTER":
        return { ...state, count: action.payload };

    default:
      return state;
  }
}
