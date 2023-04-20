import { legacy_createStore as createStore } from "redux";
import cardReducer from "./reducer";
const store = createStore(cardReducer);
export default store;
