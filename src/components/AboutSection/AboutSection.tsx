import './AboutSection.css'

export type SpecialtyRecord = {
    title: string
    description: string
    icon: string
}

type SpecialtyProps = {
    specialty: SpecialtyRecord
}

export function Specialty({ specialty }: SpecialtyProps) {
    return (
        <div className="w3-quarter">
            <i className={`fa fa-${specialty.icon} w3-margin-bottom w3-jumbo w3-center`}></i>
            <p className="w3-large">{specialty.title}</p>
            <p>{specialty.description}</p>
        </div>
    )
}

type AboutSectionProps = {
    data: SpecialtyRecord[]
}

export function AboutSection({ data }: AboutSectionProps) {
    return (
        <div className="about-section">
            <div className="w3-row-padding w3-center specialties">
                {data?.map((specialty) => (
                    <Specialty specialty={specialty} />
                ))}
            </div>
        </div>
    )
}
