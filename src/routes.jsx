import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/vans/Vans'
import Van from './pages/vans/Van'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import HostVans from './pages/host/HostVans'
import Reviews from './pages/host/Reviews'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'vans',
                element: <Vans/>,
                loader: vansLoader,
                errorElement: <Error/>,
            },
            {
                path: 'vans/:id',
                element: <Van/>,
            },
            {
                path: 'host',
                element: <HostLayout/>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>,
                    },
                    {
                        path: 'income',
                        element: <Income/>,
                    },
                    {
                        path: 'vans',
                        element: <HostVans/>,
                    },
                    {
                        path: 'reviews',
                        element: <Reviews/>,
                    },
                    {
                        path: 'vans/:id',
                        element: <HostVanDetail/>,
                        children: [
                            {
                                index: true,
                                element: <HostVanInfo/>,
                            },
                            {
                                path: 'pricing',
                                element: <HostVanPricing/>,
                            },
                            {
                                path: 'photos',
                                element: <HostVanPhotos/>,
                            },
                        ]
                    },
                ]
            },
            {
                path: '*',
                element: <NotFound/>,
            }
        ]
    }
])

export default router