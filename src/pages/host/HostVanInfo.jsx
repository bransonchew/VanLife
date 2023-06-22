import { useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utils'


export async function loader({ request }) {

    await requireAuth(request)

    return 'van info'
}


export default function HostVanInfo() {

    const van = useOutletContext()

    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{ van.name }</span></h4>
            <h4>Category: <span>{ van.type }</span></h4>
            <h4>Description: <span>{ van.description }</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}