import { TeamMemberRecord } from './TeamMember'

type TeamMemberHighlightProps = {
    member: TeamMemberRecord
    onClick: (member: TeamMemberRecord) => void
}

export function TeamMemberHighlight({ member, onClick }: TeamMemberHighlightProps) {
    const photo = member.image ? (
        <img src={`/photos/${member.image}`} alt={member.name} className="photo" />
    ) : (
        <div className="nophoto-frame">
            <i className="nophoto fa fa-user-tie"></i>
        </div>
    )

    return (
        <div className="team-member-highlight">
            <div className="w3-card bg-3">
                <div className="heading">
                    <div className="photo-section">{photo}</div>
                    <div className="">
                        <h3 className="w3-center">{member.name}</h3>
                        <p className="w3-opacity w3-center title">{member.title}</p>
                    </div>
                </div>
                <div className="w3-container">
                    <p className="bio" dangerouslySetInnerHTML={{ __html: member.description }}></p>
                    <p className="buttons">
                        <button className="w3-button" onClick={() => onClick(member)}>
                            <i className="fa fa-chevron-left"></i> Back
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
