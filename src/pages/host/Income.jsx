import { requireAuth } from '../../utils'


export async function loader({ request }) {

    await requireAuth(request)

    return 'van income'
}


export default function Income() {
    return (
        <>
            <h1>Income 💎</h1>
        </>
    )
}