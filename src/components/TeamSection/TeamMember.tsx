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
        <div className="w3-third team-member">
            <div className="w3-card bg-3">
                <div className="heading">
                    <div className="photo">{photo}</div>
                    <div className="details">
                        <h3 className="w3-center">{member.name}</h3>
                        <p className="w3-opacity w3-center title">{member.title}</p>
                        <p className="buttons">
                            <button className="w3-button" onClick={() => onClick(member)}>
                                <i className="fa fa-book"></i> Read more
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
