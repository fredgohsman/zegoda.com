export type TeamMemberRecord = {
    name: string
    title: string
    description: string
    image: string
}

type TeamMemberProps = {
    member: TeamMemberRecord
    onClick: (member: TeamMemberRecord) => void
}

export function TeamMember({ member, onClick }: TeamMemberProps) {
    const photo = member.image ? (
        <img src={`/photos/${member.image}`} alt={member.name} className="photo" />
    ) : (
        <div className="nophoto-frame">
            <i className="nophoto fa fa-user-tie"></i>
        </div>
    )

    return (
        <div className="w3-quarter">
            <div className="w3-card bg-3">
                <div className="photo-section">{photo}</div>
                <div className="w3-container">
                    <h3 className="w3-center">{member.name}</h3>
                    <p className="w3-opacity w3-center">{member.title}</p>
                    <p dangerouslySetInnerHTML={{ __html: member.description }}></p>
                    <p>
                        <button
                            className="w3-button w3-light-grey w3-block"
                            onClick={() => onClick(member)}
                        >
                            <i className="fa fa-envelope"></i> Contact
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
