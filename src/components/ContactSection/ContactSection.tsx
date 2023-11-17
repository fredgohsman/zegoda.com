import { ContactForm } from './ContactForm'
import { ContactItem } from './ContactItem'
import './ContactSection.css'

export type ContactItemRecord = {
    icon: string
    label: string
    title: string
}

type ContactSectionProps = {
    data: ContactItemRecord[]
}

export function ContactSection({ data }: ContactSectionProps) {
    return (
        <div className="contact-items">
            <div className="info">
                {data.map((item) => (
                    <ContactItem data={item} key={item.icon} />
                ))}
            </div>
            <br />
            {/* <ContactForm /> */}
        </div>
    )
}
