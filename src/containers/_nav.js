import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Utilisateurs']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Clients',
    to: '/clients',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Partenaires',
    to: '/partenaire',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Point de ventes',
    to: '/pointventes',
    icon: 'cil-home',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Demandes']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Partenairiats',
    to: '/reqpartenaire',
    icon: 'cil-people',
    badge: {
      color: 'danger',
      text: '50',
    }
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Points de ventes',
    to: '/reqpointdevente',
    icon: 'cil-home',
    badge: {
      color: 'danger',
      text: '50',
    }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Produits'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: "Demandes d'ajout",
    to: '/reqproducts',
    icon: 'cil-chevron-top',
    badge: {
      color: 'danger',
      text: '500',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: "Produits vendu",
    to: '/produitvendu',
    icon: 'cil-check',
  },

]

export default _nav
