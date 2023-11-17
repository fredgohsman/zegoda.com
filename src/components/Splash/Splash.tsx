import { SocialMediaLink, SocialMediaLinkRecord } from '../SocialMediaLink/SocialMediaLink'
import './Splash.css'

type SplashProps = {
    links: SocialMediaLinkRecord[]
}

export function Splash({ links }: SplashProps) {
    return (
        <header className="splash w3-display-container w3-grayscale-min" id="home">
            <div className="w3-display-left w3-text-white content">
                <div className="title">Cutting-Edge Data-Driven Strategies and Solutions </div>
                <div className="sub-title">
                    Delivering Excellence in Data Services: Applications, Operations, Migrations,
                    Analytics, and AI.
                </div>
                <p>
                    <a
                        href="#about"
                        className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
                    >
                        Learn more and start today
                    </a>
                </p>
            </div>
            <div className="w3-display-bottomleft w3-text-grey w3-large links">
                {links.map((item) => (
                    <SocialMediaLink item={item} key={item.id} />
                ))}
            </div>
        </header>
    )
}
