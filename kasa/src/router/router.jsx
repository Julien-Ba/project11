import { createHashRouter } from 'react-router-dom';
import About from '../pages/about/About';
import Accommodation from '../pages/accommodation/Accommodation';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import Layout from '../components/layout/Layout';

export const router = createHashRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/accommodation/:id',
                element: <Accommodation />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
