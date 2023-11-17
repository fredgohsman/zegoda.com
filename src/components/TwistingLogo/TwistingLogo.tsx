import logo from './logo.svg'
import './TwistingLogo.css'

export function TwistingLogo() {
    return (
        <div className="TwistingLogoContainer">
            <img src={logo} className="TwistingLogo" alt="logo" />
        </div>
    )
}
