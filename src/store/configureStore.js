// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function() {
  return configureStore({ reducer });
}