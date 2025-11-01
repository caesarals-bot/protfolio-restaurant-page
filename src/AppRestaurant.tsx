
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/App.router";

function AppRestaurant() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  )
}

export default AppRestaurant
