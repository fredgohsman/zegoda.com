import { NavbarMenuItem } from './NavbarMenuItem'
import './Navbar.css'

export type MenuItemRecord = {
    title: string
    link: string
    icon: string
    iconStyle?: string | undefined
}

type NavbarProps = {
    menuItems: MenuItemRecord[]
    menuToggleClicked: () => void
}

export function Navbar({ menuItems, menuToggleClicked }: NavbarProps) {
    return (
        <div className="w3-top">
            <div className="navbar w3-bar w3-white w3-card" id="myNavbar">
                <a href="#home" className="branding w3-bar-item w3-button w3-wide">
                    <img src="/logo192.png" className="nav-logo" alt="logo" />
                    <div className='name'>Zegoda</div>
                </a>
                <div className='title'></div>
                {/* <!-- Right-sided navbar links --> */}
                <div className="w3-right w3-hide-small w3-hide-medium">
                    {menuItems.map((menuItem) => (
                        <NavbarMenuItem menuItem={menuItem} key={menuItem.link} />
                    ))}
                </div>
                {/* <!-- Hide right-floated links on small screens and replace them with a menu icon --> */}

                <button
                    className="w3-bar-item w3-button w3-right w3-hide-large"
                    onClick={menuToggleClicked}
                >
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        </div>
    )
}
