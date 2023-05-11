import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import MainContainer from "./Components/Body/MainContainer";
import VideoWatch from "./Components/Body/VideoWatch";
import Head from "./Components/Head";
import store from "./store";

const appRouter = createBrowserRouter([
  {
    path: "/youtube",
    element: <Body />,
    children: [
      {
        path: "/youtube/watch",
        element: <VideoWatch />,
      },
      {
        path: "/youtube",
        element: <MainContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="min-h-screen flex flex-col">
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
