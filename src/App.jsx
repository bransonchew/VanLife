import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import Van from './pages/vans/Van'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './components/HostLayout'


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
                        <Route path="reviews" element={ <Reviews/> }/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}