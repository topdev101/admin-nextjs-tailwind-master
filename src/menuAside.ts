import {
  mdiAccountCircle,
  mdiMonitor,
} from '@mdi/js'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  }
]

export default menuAside
