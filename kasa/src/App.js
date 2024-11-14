import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/accomodation/:id',
        element: <Accomodation />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
