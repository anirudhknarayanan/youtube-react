import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
}
])

function App() {
  return (
    <div className="App">
        <Header/>
        <RouterProvider router={appRouter}/>
        
        
        
    </div>
  );
}

export default App;
