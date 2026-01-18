import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/pages/RootLayout";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import SchoolsSection from "./components/sections/SchoolsSection";
import SupportSection from "./components/sections/SupportSection";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '', element: <HomePage />},
      {path: 'about', element: <AboutPage />},
      {path: 'schools', element: <SchoolsSection />},
      {path: 'support', element: <SupportSection />},
      // {path: 'info', element: },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
