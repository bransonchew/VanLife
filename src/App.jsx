import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Van from './pages/Van'
import '../server'


export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/vans" element={ <Vans/> }/>
                <Route path="/vans/:id" element={ <Van/> }/>
            </Routes>
        </BrowserRouter>
    )
}