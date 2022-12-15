import { createBrowserRouter } from "react-router-dom";
import GuestBook from "./guest-book-toolkit-2/GuestBook";
import App from "./App";
import CounterSlicePage from "./counter-redux-toolkit/CounterSlicePage";
import LockerPage from "./pr/LockerPage";
import GuestBookTable from "./guest-book-toolkit-2/GuestBookTable";
import GuestBookForm from "./guest-book-toolkit-2/GuestBookForm";
import ShoeRentalPageFn from "./shoe-rental-2/ShoeRentalPageFn";
import ShoeRentalList from "./shoe-rental-2/ShoeRentalList";
import ShoeRentalFormFn from "./shoe-rental-2/ShoeRentalFormFn";

// output function ini nanti akan dikirimkan ke RouterProvider, jadi mirip2 dengan store redux.
// /guestbook
// /shoe-rental
// /counter
const routes = createBrowserRouter([
  {
    path: "/", // url path pada address bar browser
    element: <App />,
    children: [
      {
        path: "",
        element: <GuestBook />,
      },
      {
        path: "guestbook",
        element: <GuestBook />,
        //   children: [
        //     {
        //       path: "",
        //       element: <GuestBookTable />,
        //     },
        //     {
        //       path: "form",
        //       element: <GuestBookForm />,
        //     },
        //   ],
      },
      {
        path: "shoe-rental",
        element: <ShoeRentalPageFn />,
        children: [
          {
            path: "",
            element: <ShoeRentalList />,
          },
          {
            path: "form",
            element: <ShoeRentalFormFn />,
          },
          {
            path: "form/:id",
            element: <ShoeRentalFormFn />,
          },
        ],
      },
      {
        path: "counter",
        element: <CounterSlicePage />,
      },
      {
        path: "locker",
        element: <LockerPage />,
      },
    ],
  },
]);

export default routes;
