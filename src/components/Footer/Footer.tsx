import { SocialMediaLink, SocialMediaLinkRecord } from '../SocialMediaLink/SocialMediaLink'
import './Footer.css'

type FooterProps = {
    links: SocialMediaLinkRecord[]
}

export function Footer({ links }: FooterProps) {
    return (
        <footer className="w3-center">
            <a href="#home" className="w3-button w3-light-grey">
                <i className="fa fa-arrow-up w3-margin-right"></i>To the top
            </a>
            <div className="w3-xlarge w3-section">
                {links.map((item) => (
                    <SocialMediaLink item={item} key={item.id} />
                ))}
            </div>
            <p>© Zegoda, LLC. 2023</p>
        </footer>
    )
}
