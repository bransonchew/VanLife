import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'


export async function loader({ params, request }) {

    await requireAuth(request)

    return getHostVans(params.id)
}


export default function HostVanDetail() {

    const van = useLoaderData()

    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    return (
        <section>

            <NavLink to=".." relative="path" className="back-button">
                ← Back to all vans
            </NavLink>

            <div className="host-van-detail-layout-container">
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

        </section>
    )
}