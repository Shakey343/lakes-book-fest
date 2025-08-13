import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/pages/RootLayout";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import EventsIndex from "./components/events/EventsIndex";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {path: '', element: <HomePage />},
      {path: 'about', element: <AboutPage />},
      {path: 'events', element: <EventsIndex />},
    ]
  },
])

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
