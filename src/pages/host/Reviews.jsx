import { useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'


export async function loader() {

    await requireAuth()

    return 'van reviews'
}


export default function Reviews() {

    const reviews = useLoaderData()

    console.log(reviews)

    return (
        <>
            <h1>Reviews 💓</h1>
        </>
    )
}