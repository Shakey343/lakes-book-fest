import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/pages/RootLayout";
import HomePage from "./components/pages/HomePage";
import LocalGuidePage from "./components/pages/LocalGuidePage";
import SchoolsPage from "./components/sections/SchoolsPage";
import SupportPage from "./components/pages/SupportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "guide", element: <LocalGuidePage /> },
      { path: "schools", element: <SchoolsPage /> },
      { path: "support", element: <SupportPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
