import { Routes, Route, BrowserRouter } from "react-router-dom";
import GuestBook from "./guest-book-toolkit-2/GuestBook";
import ShoeRentalPageFn from "./shoe-rental-2/ShoeRentalPageFn";
import ShoeRentalForm from "./shoe-rental-2/ShoeRentalFormFn";
import CounterSlicePage from "./counter-redux-toolkit/CounterSlicePage";
import LockerPage from "./pr/LockerPage";
import { Container, Image } from "react-bootstrap";
import Header from "./layout/Header";
import { Provider } from "react-redux";
import MainStore from "./store";
import ShoeRentalList from "./shoe-rental-2/ShoeRentalList";
import { RouteGuard } from "./route-guard/RouteGuard";

export default function AppRouted() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Provider store={MainStore}>
          <Routes>
            <Route element={<RouteGuard />}>
              <Route
                path="*"
                element={
                  <div className="d-flex justify-content-center">
                    <Image
                      style={{
                        width: "900px",
                        height: "550px",
                        marginTop: "20px",
                      }}
                      src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-error-404-3.jpg.webp"
                    />
                  </div>
                }
              />
              <Route path="" element={<GuestBook />} />
              <Route path="guestbook" element={<GuestBook />} />
              <Route path="shoe-rental" element={<ShoeRentalPageFn />}>
                <Route path="" element={<ShoeRentalList />} />
                <Route path="form" element={<ShoeRentalForm />} />
                <Route path="form/:id" element={<ShoeRentalForm />} />
              </Route>
            </Route>
            <Route path="counter" element={<CounterSlicePage />} />
            <Route path="locker" element={<LockerPage />} />
            <Route path="login" element={<>Login</>} />
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
}
