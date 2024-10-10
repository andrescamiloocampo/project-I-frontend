interface NavLink {
    text: string;
    href: string;
}

export const navLinks:NavLink[] = [
    {
        text: 'Explorar',
        href: '/'
    },
    {
        text: 'Directorio',
        href: '/dashboard/directory'
    },
    {
        text: 'Servicios',
        href: '/dashboard/services'
    },
    {
        text: 'Trabajos',
        href: '/dashboard/works'
    },
]