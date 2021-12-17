import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bugs";

export default function configureStore() {
  // createStore là 1 function trả về state tiếp theo, cho state hiện tại và một action để xử lý
  const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true })
  )
  return store;
}

// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs";

// export default function() {
//   return configureStore({ reducer });
// }