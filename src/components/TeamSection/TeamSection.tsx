import { TeamMember, TeamMemberRecord } from './TeamMember'
import './TeamSection.css'

type TeamSectionProps = {
    members: TeamMemberRecord[]
}

export function TeamSection({ members: data }: TeamSectionProps) {
    // handleContactClicked
    return (
        <div className="team-section">
            <div className="team-members">
                {data.map((member) => (
                    <TeamMember member={member} onClick={(member) => alert(member.name)} />
                ))}
            </div>
        </div>
    )
}
