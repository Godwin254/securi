import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

export const adminNavigations = [
      {
            url: '/app/admin',
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

export const residentNavigations = [
      {
            url: '/app/resident',
            icon: MdSpaceDashboard,
            text: 'Dashboard'
      },
      {
            url: '/app/resident/manage-members',
            icon: HiUsers,
            text: 'Members'
      },
      {
            url: '/app/resident/manage-devices',
            icon: RiDeviceFill,
            text: 'Devices'
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
