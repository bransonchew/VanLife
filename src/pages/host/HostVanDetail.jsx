import { Await, defer, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'
import { Suspense } from 'react'


export async function loader({ params, request }) {

    await requireAuth(request)

    return defer({ van: getHostVans(params.id) })
}


export default function HostVanDetail() {

    const data = useLoaderData()

    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    function vanElement(van) {
        return (
            <div className="host-van-detail">
                <img src={ van.imageUrl } alt="van"/>
                <div className="host-van-detail-info-text">
                    <i className={ `van-type van-type-${ van.type }` }>
                        { van.type }
                    </i>
                    <h3>{ van.name }</h3>
                    <h4>${ van.price }/day</h4>
                </div>
            </div>
        )
    }

    function render(van) {
        return (
            <div className="host-van-detail-layout-container">
                { vanElement(van) }
                <nav className="host-van-detail-nav">
                    <NavLink
                        to=""
                        end
                        style={ ({ isActive }) => isActive ? activeStyle : null }
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={ ({ isActive }) => isActive ? activeStyle : null }
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={ ({ isActive }) => isActive ? activeStyle : null }
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={ van }/>
            </div>
        )
    }

    return (
        <section>

            <NavLink to=".." relative="path" className="back-button">
                ← Back to all vans
            </NavLink>

            <Suspense fallback={<h2 style={{color: 'red'}}>Loading...</h2>}>
                <Await resolve={data.van}>
                    { render }
                </Await>
            </Suspense>

        </section>
    )
}