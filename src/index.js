import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/Contact",
    element:<Contact/>,
  },
  {
    path:"/About",
    element:<About/>,
  }
])



root.render(
  <>
       
         <RouterProvider router={router}/>
  </>
);


