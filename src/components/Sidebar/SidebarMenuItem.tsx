import { MenuItemRecord } from '../Navbar/Navbar'

type SidebarMenuItemProps = {
    menuItem: MenuItemRecord
    onClose: () => void
}

export function SidebarMenuItem({ menuItem, onClose }: SidebarMenuItemProps) {
    return (
        <a href={menuItem.link} onClick={onClose} className="w3-bar-item w3-button">
            {menuItem.title}
        </a>
    )
}
