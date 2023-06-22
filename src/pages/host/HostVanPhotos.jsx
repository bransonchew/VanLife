import { useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utils'


export async function loader({ request }) {

    await requireAuth(request)

    return 'van photos'
}


export default function HostVanPhotos() {

    const van = useOutletContext()

    return (
        <>
            <img src={ van.imageUrl } alt="van" className="host-van-detail-image"/>
        </>
    )
}