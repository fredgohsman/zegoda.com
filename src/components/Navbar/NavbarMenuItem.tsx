import { MenuItemRecord } from './Navbar'

type NavbarMenuItemProps = {
    menuItem: MenuItemRecord
}

export function NavbarMenuItem({ menuItem }: NavbarMenuItemProps) {
    const style = menuItem.iconStyle ? `fa-${menuItem.iconStyle}` : 'fa'
    const icon = menuItem.icon ? <><i className={`${style} fa-${menuItem.icon}`}></i>{' '}</> : ''

    return (
        <a href={menuItem.link} className="w3-bar-item w3-button menuitem">
            {icon}{' '}{menuItem.title}
        </a>
    )
}
