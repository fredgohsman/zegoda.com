import { ServiceArea, ServiceAreaRecord } from './ServiceArea'
import './ServiceAreasSection.css'

type ServicesProps = {
    services: ServiceAreaRecord[]
}

export function ServiceAreasSection({ services }: ServicesProps) {
    return (
        <div className="service-areas-section">
            <div className="w3-row-padding w3-center">
                {services.map((item) => (
                    <ServiceArea item={item} onClick={() => {}} />
                ))}
            </div>
        </div>
    )
}
