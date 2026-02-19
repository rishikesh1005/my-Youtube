import './App.css';
import Head from './components/Head';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
    ]
  },
])


function App() {
  return (
    <Provider store={store}>
    <div>
        <Head/>
        <RouterProvider router={appRouter} />

{/***
 * Head
 * Body 
 *   sideBar
 *      menuList
 *   mainContainer
 *      buttonList
 *      videoContainer
 *         videoCard
 * 
 * 
 */
}
    </div>
    </Provider>
  );
}

export default App;
