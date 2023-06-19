import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Van from './pages/Van'
import '../server'


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Layout/> }>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/about" element={ <About/> }/>
                    <Route path="/vans" element={ <Vans/> }/>
                    <Route path="/vans/:id" element={ <Van/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}