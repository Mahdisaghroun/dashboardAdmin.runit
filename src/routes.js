import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Clients = React.lazy(() => import('./views/Client/Clients'));
const Partenaire = React.lazy(() => import('./views/Partenaire/Partenaire'));
const PointVentes = React.lazy(() => import('./views/Point_de_ventes/PointVentes'));
const RequestPartenaire = React.lazy(() => import('./views/Requests/RequestPartenaire'));

const ReqPointDeVente = React.lazy(() => import('./views/Requests/ReqPointDeVente'));
const ReqProducts = React.lazy(() => import('./views/ReqProducts/ReqProcuts'));
const ProduitVendu = React.lazy(() => import('./views/ReqProducts/ProduitVendu'));

const routes = [
  { path: '/', exact: true, name: 'Acceuil' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/clients', name: 'Clients', component: Clients },
  { path: '/partenaire', name: 'Partenaires', component: Partenaire },
  { path: '/pointventes', name: 'Point de Ventes', component: PointVentes },
  { path: '/reqpartenaire', name: 'Demande de partenairiat', component: RequestPartenaire },
  { path: '/reqpointdevente', name: 'Demande de points de ventes', component: ReqPointDeVente },
  { path: '/reqproducts', name: "Demande d'ajout des produits", component: ReqProducts },
  { path: '/produitvendu', name: "Produit Vendu", component: ProduitVendu },


];

export default routes;
