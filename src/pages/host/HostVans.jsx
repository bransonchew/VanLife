import { Await, defer, Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'
import { Suspense } from 'react'


export async function loader({ request }) {

    await requireAuth(request)

    return defer({ vans: getHostVans() })
}


export default function HostVans() {

    const data = useLoaderData()

    function hostVanElements(vans) {
        return (
            vans.map(van => (
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
        )
    }

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={ <h2>Loading...</h2> }>
                <Await resolve={ data.vans }>
                    { vans => (
                        <div className="host-vans-list">
                            <section>
                                { hostVanElements(vans) }
                            </section>
                        </div>
                    ) }
                </Await>
            </Suspense>
        </section>
    )
}