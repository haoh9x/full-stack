"use client";

import { Provider } from "react-redux";

import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: React.ReactNode;
}

export const CustomProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
