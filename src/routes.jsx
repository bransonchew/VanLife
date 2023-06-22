import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail'
import HostLayout from './components/HostLayout'
import Dashboard, { loader as dashboardLoader } from './pages/host/Dashboard'
import Income, { loader as incomeLoader } from './pages/host/Income'
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans'
import Reviews, { loader as reviewsLoader } from './pages/host/Reviews'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/host/HostVanDetail'
import HostVanInfo, { loader as hostVanInfoLoader } from './pages/host/HostVanInfo'
import HostVanPricing, { loader as hostVanPricingLoader } from './pages/host/HostVanPricing'
import HostVanPhotos, { loader as hostVanPhotosLoader } from './pages/host/HostVanPhotos'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login, { loader as loginLoader } from './pages/Login'


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
                path: 'login',
                element: <Login/>,
                loader: loginLoader
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
                element: <VanDetail/>,
                loader: vanDetailLoader
            },
            {
                path: 'host',
                element: <HostLayout/>,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>,
                        loader: dashboardLoader
                    },
                    {
                        path: 'income',
                        element: <Income/>,
                        loader: incomeLoader
                    },
                    {
                        path: 'vans',
                        element: <HostVans/>,
                        loader: hostVansLoader
                    },
                    {
                        path: 'reviews',
                        element: <Reviews/>,
                        loader: reviewsLoader
                    },
                    {
                        path: 'vans/:id',
                        element: <HostVanDetail/>,
                        loader: hostVanDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <HostVanInfo/>,
                                loader: hostVanInfoLoader
                            },
                            {
                                path: 'pricing',
                                element: <HostVanPricing/>,
                                loader: hostVanPricingLoader
                            },
                            {
                                path: 'photos',
                                element: <HostVanPhotos/>,
                                loader: hostVanPhotosLoader
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