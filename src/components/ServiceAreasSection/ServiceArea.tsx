export type ServiceAreaRecord = {
    description: string
    enabled: boolean
    image: string
    name: string
    title: string
}

type ServiceAreaProps = {
    item: ServiceAreaRecord
    onClick: (item: ServiceAreaRecord) => void
}

export function ServiceArea({item, onClick}: ServiceAreaProps) {
    return (
        <div className="w3-third service-area">
            <img
                src={`/images/${item.image}`}
                style={{ width: '100%' }}
                onClick={() => onClick(item)}
                className="w3-hover-opacity"
                alt={item.name}
            />
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
        </div>
    )
}
