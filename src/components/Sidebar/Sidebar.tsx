import { MenuItemRecord } from '../Navbar/Navbar'
import { SidebarMenuItem } from './SidebarMenuItem'
import './Sidebar.css'

type SidebarProps = {
    close: () => void
    isOpen: boolean
    menuItems: MenuItemRecord[]
}

export function Sidebar({ close, isOpen, menuItems }: SidebarProps) {
    const className = isOpen ? 'open' : 'close'

    return (
        <div className="Sidebar">
            <nav
                className={`w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large ${className}`}
                id="mySidebar"
            >
                <button onClick={close} className="w3-bar-item w3-button w3-large w3-padding-16">
                    Close ×
                </button>
                {menuItems.map((menuItem) => (
                    <SidebarMenuItem onClose={close} menuItem={menuItem} key={menuItem.link} />
                ))}
            </nav>
        </div>
    )
}
