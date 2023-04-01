import {MdOutlineLogin, MdSpaceDashboard, MdAccessTimeFilled, MdManageAccounts} from 'react-icons/md'
import {HiUsers} from "react-icons/hi"
import {RiDeviceFill} from "react-icons/ri"

export const AdminLinks = [
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
export const ClientLinks = [
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

export const accessTableHead = [
      'Name',
      'Car ID',
      'House No.',
      'Time',
      'Accessed By',
      'Action'

]


export const residentTableHead = [
      'Firstname',
      'Lastname',
      'House',
      'Phone',
      'Members',
      'Number plate',
      'Tag',
      'Action'
]
export const deviceTableHead = [
      'Device',
      'Data Id',
      'Assigned To',
      'Date Created',
      'Action'
]