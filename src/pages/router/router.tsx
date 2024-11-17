import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../Home/home.page';
import StampPage from '../stamp.page';
import Layout from '../../components/layout/layout';
import ContactPage from '../contact.page';
import Projects from '../projects/projects';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <StampPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);
