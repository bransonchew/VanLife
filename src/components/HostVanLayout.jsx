import { NavLink, Outlet } from 'react-router-dom'


export default function HostVanLayout() {
    return (
        <>
            {/*<div>*/}
            {/*    <NavLink to="/host/vans">Back to all vans</NavLink>*/}
            {/*</div>*/}
            <Outlet/>
        </>
    )
}