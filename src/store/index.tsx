import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

export { store }
