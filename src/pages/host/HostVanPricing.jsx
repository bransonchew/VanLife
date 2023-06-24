import { useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utils'


export async function loader({ request }) {
    await requireAuth(request)
    return null
}


export default function HostVanPricing() {

    const van = useOutletContext()

    return (
        <>
            <h3 className="host-van-price">
                ${ van.price }<span>/day</span>
            </h3>
        </>
    )
}