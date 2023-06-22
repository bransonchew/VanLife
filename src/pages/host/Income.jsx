import { requireAuth } from '../../utils'


export async function loader() {

    await requireAuth()

    return 'van income'
}


export default function Income() {
    return (
        <>
            <h1>Income 💎</h1>
        </>
    )
}