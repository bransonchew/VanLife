import { Suspense } from 'react'
import { Await, defer, Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'


export async function loader() {
    return defer({ vans: getVans() })
}


export default function Vans() {

    const data = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    const filter = searchParams.get('type')

    function handleFilter(key, val) {

        setSearchParams(prev => {

            if (val) {
                prev.set(key, val)
            } else {
                prev.delete(key)
            }

            return prev
        })
    }

    function vanElements(vans) {
        return (
            vans.map(van => (
                filter && van.type.toLowerCase() !== filter.toLowerCase() ?
                    null
                    :
                    <div key={ van.id } className="van-tile">
                        <Link
                            to={ van.id }
                            state={ { query: `?${ searchParams }`, type: filter } }
                        >
                            <img src={ van.imageUrl } alt={ 'van' }/>
                            <div className="van-info">
                                <h3>{ van.name }</h3>
                                <p>${ van.price }<span>/day</span></p>
                            </div>
                            <i className={ `van-type ${ van.type } selected` }>
                                { van.type }
                            </i>
                        </Link>
                    </div>
            ))
        )
    }

    function render(vans) {
        return (
            <>
                <div className="van-list-filter-buttons">
                    <button
                        onClick={ () => handleFilter('type', 'simple') }
                        className={
                            `van-type simple ${ filter === 'simple' ? 'selected' : '' }`
                        }
                    >
                        Simple
                    </button>
                    <button
                        onClick={ () => handleFilter('type', 'luxury') }
                        className={
                            `van-type luxury ${ filter === 'luxury' ? 'selected' : '' }`
                        }
                    >
                        Luxury
                    </button>
                    <button
                        onClick={ () => handleFilter('type', 'rugged') }
                        className={
                            `van-type rugged ${ filter === 'rugged' ? 'selected' : '' }`
                        }
                    >
                        Rugged
                    </button>
                    { filter &&
                        <button
                            onClick={ () => handleFilter('type') }
                            className={ `van-type clear-filters` }
                        >
                            Clear filters
                        </button>
                    }
                </div>
                <div className="van-list">
                    { vanElements(vans) }
                </div>
            </>
        )
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <Suspense fallback={ <h2>Loading...</h2> }>
                <Await resolve={ data.vans }>
                    { render }
                </Await>
            </Suspense>
        </div>
    )
}