// import { Navbar } from './components/Navbar'
// import ContainerBottom from './pages/HomeComponents/ContainerBottom'
// import ContainerContact from './pages/HomeComponents/ContainerContact'
// import { ContainerFirst } from './pages/HomeComponents/ContainerFirst'
// import ContainerGallery from './pages/HomeComponents/ContainerGallery'
// import ContainerSale from './pages/HomeComponents/ContainerSale'
// import { ContainerSecond } from './pages/HomeComponents/ContainerSecond'
import AboutUs from "./pages/AboutUs";
import "./scss/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
