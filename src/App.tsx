import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import RootLayout from './layouts/RootLayout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
)


const App: React.FC = () => {

  return <RouterProvider router={router}/>;
}

export default App;
