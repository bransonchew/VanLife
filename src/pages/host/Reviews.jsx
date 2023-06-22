import { useLoaderData } from 'react-router-dom'


export function loader() {
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