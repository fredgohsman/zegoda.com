import './SocialMediaLink.css'

export type SocialMediaLinkRecord = {
    enabled: boolean
    icon: string
    id: string
    link: string
}

type SocialMediaLinkProps = {
    item: SocialMediaLinkRecord
}

export function SocialMediaLink({ item }: SocialMediaLinkProps) {
    return (
        <a href={item.link} target="_blank" rel="noreferrer">        
            <i className={`fa-brands fa-${item.icon} w3-hover-opacity`}></i>{' '}
        </a>
    )
}
