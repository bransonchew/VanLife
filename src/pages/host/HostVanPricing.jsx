import { useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utils'


export async function loader() {

    await requireAuth()

    return 'van pricing'
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