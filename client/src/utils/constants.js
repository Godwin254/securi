import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

export const backendAPI = "http://localhost:8000"//"http://127.0.0.1:5001/securi-91c08/us-central1/api"

export const adminNavigations = [
      {
            url: '/app/admin/dashboard',
            icon: MdSpaceDashboard,
            text: 'Dashboard'
      },
      {
            url: '/app/admin/manage-residents',
            icon: HiUsers,
            text: 'Residents'
      },
      {
            url: '/app/admin/manage-devices',
            icon: RiDeviceFill,
            text: 'Devices'
      },
      {
            url: '/app/admin/access-history',
            icon: MdAccessTimeFilled,
            text: 'Access'
      },
      {
            url: '/app/admin/settings',
            icon: MdManageAccounts,
            text: 'Settings'
      }
]

export const userNavigations = [
      {
            url: '/app/resident/dashboard',
            icon: MdSpaceDashboard,
            text: 'Dashboard'
      },
      {
            url: '/app/resident/manage-members',
            icon: HiUsers,
            text: 'Members'
      },
      {
            url: '/app/resident/access-history',
            icon: MdAccessTimeFilled,
            text: 'Access'
      },
      {
            url: '/app/resident/settings',
            icon: MdManageAccounts,
            text: 'Settings'
      }
]

