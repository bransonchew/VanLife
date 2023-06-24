import { useRouteError } from 'react-router-dom'


export default function Error() {

    const error = useRouteError()

    // // hacky code
    // const navigate = useNavigate()
    //
    // useEffect(() => {
    //
    //     if (error.status === 302 && error?.headers?.map?.location) {
    //
    //         console.log('got here')
    //
    //         navigate(error?.headers?.map?.location)
    //     }
    //
    //     console.error(error)
    //
    // }, [])

    return (
        <>
            <h1>Error: { error.message }</h1>
            <pre>{ error.status } - { error.statusText }</pre>
        </>
    )
}