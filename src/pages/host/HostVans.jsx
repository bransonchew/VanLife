import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'


export async function loader() {

    await requireAuth()

    return getHostVans()
}


export default function HostVans() {

    const vans = useLoaderData()

    const hostVanElements = vans.map(van => (
        <Link
            key={ van.id }
            to={ van.id }
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={ van.id }>
                <img src={ van.imageUrl } alt={ `Photo of ${ van.name }` }/>
                <div className="host-van-info">
                    <h3>{ van.name }</h3>
                    <p>${ van.price }/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                { vans.length > 0 ?
                    <section>
                        { hostVanElements }
                    </section>
                    :
                    <h2>Loading...</h2>
                }
            </div>
        </section>
    )
}