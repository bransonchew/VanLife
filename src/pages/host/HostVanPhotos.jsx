import { useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utils'


export async function loader() {

    await requireAuth()

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