import './StatisticsSection.css'

type StatisticsSectionProps = {
    clientCount: number
    meetingCount: number
    partnerCount: number
    projectCount: number
}

export function StatisticsSection({
    clientCount: clients,
    meetingCount: meetings,
    partnerCount: partners,
    projectCount: projects,
}: StatisticsSectionProps) {
    return (
        <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
            <div className="w3-quarter">
                <span className="w3-xxlarge">{partners}+</span>
                <br />
                Partners
            </div>
            <div className="w3-quarter">
                <span className="w3-xxlarge">{projects}+</span>
                <br />
                Projects Done
            </div>
            <div className="w3-quarter">
                <span className="w3-xxlarge">{clients}+</span>
                <br />
                Happy Clients
            </div>
            <div className="w3-quarter">
                <span className="w3-xxlarge">{meetings}+</span>
                <br />
                Meetings
            </div>
        </div>
    )
}
