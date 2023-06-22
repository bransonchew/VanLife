import { NavLink, useLoaderData, useLocation } from 'react-router-dom'
import { getVans } from '../../api'


export function loader({params}) {

    console.log(params)

    return getVans(params.id)
}


export default function VanDetail() {

    const van = useLoaderData()

    const {state} = useLocation()

    console.log(state)

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
                { van ? (
                    <div className="van-detail">
                        <img src={ van.imageUrl } alt={ 'van' }/>
                        <i className={ `van-type ${ van.type } selected` }>{ van.type }</i>
                        <h2>{ van.name }</h2>
                        <p className="van-price"><span>${ van.price }</span>/day</p>
                        <p>{ van.description }</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Loading...</h2> }
            </div>
        </>
    )
}