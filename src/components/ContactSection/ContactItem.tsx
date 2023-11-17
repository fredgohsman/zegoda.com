import { ContactItemRecord } from './ContactSection'

type ContactItemProps = {
    data: ContactItemRecord
}

export function ContactItem({data}: ContactItemProps) {
    const title = data.title ? `${data.title}: ` : ''

    return (
        <div className="ContactItem">
            <p>
                <i className={`fa fa-${data.icon} fa-fw w3-xxlarge w3-margin-right`}></i>
                {title}{data.label}
            </p>
        </div>
    )
}
