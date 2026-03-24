import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './components/Layout';
import ArticlePage from './pages/ArticlePage';
import Homepage from './pages/HomePage';
import Aboutpage from './pages/AboutPage'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'about',
        element: <Aboutpage />,
      },
      {
        path: 'articles',
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  );
}
 
 
export default App;
 
 
