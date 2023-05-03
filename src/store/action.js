export default function changeCards(data) {
  return {
    type: "SET_CARDS",
    payload: data,
  };
}

export function changeCounter(data) {
  return {
    type: "SET_COUNTER",
    payload: data,
  };
}

export function changeQuantity(data) {
  return {
    type: "SET_QUANTITY",
    payload: data,
  };
}
