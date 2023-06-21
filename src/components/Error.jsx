import { useRouteError } from 'react-router-dom'


export default function Error() {

    const error = useRouteError()

    console.error(error)

    return (
        <>
            <h1>{ error.status } - { error.statusText }</h1>
            <h3>{ error.message }</h3>
        </>
    )
}