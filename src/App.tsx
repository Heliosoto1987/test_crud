import { Provider } from "react-redux";
import { UsersProvider } from "./context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/route";
import { store } from "./store/store";

export const MyApp = () => {
  return (
    <Provider store={store}>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </Provider>
  );
};
