import { requireAuth } from '../../utils'
import { useLoaderData } from 'react-router-dom'


export async function loader() {

    await requireAuth()

    return 'Dashboard'
}


export default function Dashboard() {

    const data = useLoaderData()

    console.log(data)

    return (
        <>
            <h1>Dashboard 🚀</h1>
        </>
    )
}