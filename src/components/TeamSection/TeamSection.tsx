import { useState } from 'react'
import { TeamMember, TeamMemberRecord } from './TeamMember'
import './TeamSection.css'
import { TeamMemberHighlight } from './TeamMemberHighlight'

type TeamSectionProps = {
    members: TeamMemberRecord[]
}

export function TeamSection({ members: data }: TeamSectionProps) {
    const [highlight, setHighlight] = useState<TeamMemberRecord | null>(null)

    const handleContactClicked = (member: TeamMemberRecord) => {
        setHighlight(member)
    }

    const handleBackClicked = () => {
        setHighlight(null)
    }

    // handleContactClicked
    return (
        <div className="team-section">
            {highlight ? (
                <TeamMemberHighlight member={highlight} onClick={handleBackClicked} />
            ) : (
                <div className="w3-row-padding team-members">
                    {data.map((member) => (
                        <TeamMember
                            member={member}
                            onClick={(member) => handleContactClicked(member)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
