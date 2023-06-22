import { useNavigate, useRouteError } from 'react-router-dom'
import { useEffect } from 'react'


export default function Error() {

    const navigate = useNavigate()
    const error = useRouteError()

    // hacky code
    useEffect(() => {

        if (error.status === 302 && error?.headers?.map?.location) {

            console.log('got here')

            navigate(error?.headers?.map?.location)
        }

        console.error(error)

    }, [])

    return (
        <>
            <h1>{ error.status } - { error.statusText }</h1>
            <h3>{ error.message }</h3>
        </>
    )
}