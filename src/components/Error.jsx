import { useEffect } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'


export default function Error() {

    const error = useRouteError()

    // hacky code
    useEffect(() => {

        const navigate = useNavigate()

        if (error.status === 302 && error?.headers?.map?.location) {
            console.error(error)
            navigate(error?.headers?.map?.location)
        }

    }, [])

    return (
        <>
            <h1>Error: { error.message }</h1>
            <pre>{ error.status } - { error.statusText }</pre>
        </>
    )
}