import { Await, defer, NavLink, useLoaderData, useLocation } from 'react-router-dom'
import { getVans } from '../../api'
import { Suspense } from 'react'


export function loader({ params }) {
    return defer({ van: getVans(params.id) })
}


export default function VanDetail() {

    const data = useLoaderData()

    const { state } = useLocation()

    function vanElement(van) {
        return (
            <div className="van-detail">
                <img src={ van.imageUrl } alt={ 'van' }/>
                <i className={ `van-type ${ van.type } selected` }>{ van.type }</i>
                <h2>{ van.name }</h2>
                <p className="van-price"><span>${ van.price }</span>/day</p>
                <p>{ van.description }</p>
                <button className="link-button">Rent this van</button>
            </div>
        )
    }

    return (
        <>
            <NavLink
                to={ `..${ state.query }` }
                relative="path"
                className="back-button"
            >
                ← Back to { `${ state.type || 'all' }` } vans
            </NavLink>
            <div className="van-detail-container">
                <Suspense fallback={ <h2>Loading...</h2> }>
                    <Await resolve={ data.van }>
                        { vanElement }
                    </Await>
                </Suspense>
            </div>
        </>
    )
}