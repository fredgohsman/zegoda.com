import { ReactNode } from 'react'
import './Section.css'

type SectionProps = {
    children: ReactNode
    bgColor?: Color
    description?: string
    id?: string
    spacingBottom?: Size
    spacingTop?: Size
    title?: string
    topBgColor?: Color
}

type Size =
    | 'none'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'

type Color = '1' | '2' | '3' | '4' | '5' | '6' | 'light' | 'dark' | 'default' | 'zegoda'

export const Section = ({
    children,
    bgColor = 'default',
    description,
    id,
    spacingBottom = 'xs',
    spacingTop = 'xl',
    title,
    topBgColor = 'default',
}: SectionProps) => {
    const sectionClass = `section bg-${bgColor}`
    const className = `mb-${spacingBottom} mt-${spacingTop} w3-container`
    const titleSection = title ? <h3 className="w3-center">{title}</h3> : null
    const descriptionSection = description ? (
        <p className="w3-center w3-large" dangerouslySetInnerHTML={{ __html: description }} />
    ) : null

    return (
        <div id={id} className={sectionClass}>
            <div className={`top top-${topBgColor} spacing-${spacingTop}`}></div>
            <div className={className}>
                {titleSection}
                {descriptionSection}
                <div className="content">{children}</div>
            </div>
            <div className={`bottom spacing-${spacingBottom}`}></div>
        </div>
    )
}
