import { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'


export default function Van() {

    const [van, setVan] = useState({})

    const params = useParams()

    const {state} = useLocation()

    console.log(state)

    console.log(params)

    useEffect(() => {

        fetch(`/api/vans/${ params.id }`)
            .then(response => response.json())
            .then(data => setVan(data.vans))
            .catch(err => console.error(err))

    }, [params])

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