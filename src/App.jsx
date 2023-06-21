import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import Van from './pages/vans/Van'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import HostVans from './pages/host/HostVans'
import Reviews from './pages/host/Reviews'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import NotFound from './pages/NotFound'


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={ <Home/> }/>
                    <Route path="about" element={ <About/> }/>
                    <Route path="vans" element={ <Vans/> }/>
                    <Route path="vans/:id" element={ <Van/> }/>

                    <Route path="host" element={ <HostLayout/> }>
                        <Route index element={ <Dashboard/> }/>
                        <Route path="income" element={ <Income/> }/>
                        <Route path="vans" element={ <HostVans/> }/>
                        <Route path="reviews" element={ <Reviews/> }/>

                        <Route path="vans/:id" element={ <HostVanDetail/> }>
                            <Route index element={ <HostVanInfo/> }/>
                            <Route path="pricing" element={ <HostVanPricing/> }/>
                            <Route path="photos" element={ <HostVanPhotos/> }/>
                        </Route>
                    </Route>
                    <Route path="*" element={ <NotFound/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}