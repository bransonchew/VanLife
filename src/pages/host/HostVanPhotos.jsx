import { useOutletContext } from 'react-router-dom'


export function loader() {
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