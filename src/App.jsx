import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Contact,
  HomeLayout,
  Landing,
  Login,
  Register,
  Shop,
  SingleProduct,
  Wishlist,
  Profile,
  Search,
  ThankYou,
  OrderHistory
} from "./pages";
const queryClient = new QueryClient();
import { landingLoader } from "./pages/Landing";
import { singleProductLoader } from "./pages/SingleProduct";
import { shopLoader } from "./pages/Shop";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./firebase/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";
import DashboardLayout from "./pages/Dashboard/DashboardLayout/DashboardLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Statistics from "./pages/Dashboard/Statistics/Statistics";
import MyCart from "./pages/Dashboard/Cart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: () => fetch("http://localhost:8080/products"),
      },
      {
        path: "shop",
        element: <Shop />,
        loader: shopLoader

      },
      {
        path: "shop/product/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "user-profile",
        element: <Profile />,
      },
      {
        path:"search",
        element: <Search />
      },
      {
        path:"thank-you",
        element: <ThankYou />
      },
      {
        path:"order-history",
        element: <OrderHistory />
      }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Statistics />,
      },
       // for user
       {
        path: "my-cart",
        element: <MyCart></MyCart>,
      },
      // for admins
      // {
      //   path: "add-package",
      //   element: <AddPackage></AddPackage>,
      // },
    ]
  }
]);

function App() {
  return (
    <>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
      </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
