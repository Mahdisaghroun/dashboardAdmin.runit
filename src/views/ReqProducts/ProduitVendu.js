import {
      CBadge, CButton, CCollapse, CDataTable, CCardBody, CModal, CModalBody, CModalFooter,
      CCol, CRow, CForm, CFormGroup, CLabel, CInput, CFormText, CImg,
      CModalHeader,
      CTabs,
      CNav,
      CNavItem,
      CNavLink,
      CTabContent,
      CTabPane,
} from '@coreui/react'
import { CChart } from '@coreui/react-chartjs';
import React, { useState } from 'react'



export default function ProduitVendu() {
      const doughnut = {
            labels: [
                  'Red',
                  'Green',
                  'Yellow',
            ],
            datasets: [
                  {
                        data: [300, 50, 100],
                        backgroundColor: [
                              '#FF6384',
                              '#36A2EB',
                              '#FFCE56',
                        ],
                        hoverBackgroundColor: [
                              '#FF6384',
                              '#36A2EB',
                              '#FFCE56',
                        ],
                  }],
      };
      const usersData = [
            {
                  id: 0, produit: 'Iphone X red', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX'
            },
            { id: 1, produit: 'PC Lenovo 12GB RAM', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 2, produit: 'XXXXX', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 3, produit: 'XXXXX', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 4, produit: 'XXXXX', vendu: '2018/03/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 5, produit: 'Friderik Dávid', vendu: '2018/01/21', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 6, produit: 'Yiorgos Avraamu', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 7, produit: 'Avram Tarasios', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 8, produit: 'Quintin Ed', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 9, produit: 'Enéas Kwadwo', vendu: '2018/03/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 10, produit: 'Agapetus Tadeáš', vendu: '2018/01/21', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 11, produit: 'Carwyn Fachtna', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 12, produit: 'Nehemiah Tatius', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 13, produit: 'Ebbe Gemariah', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 14, produit: 'Eustorgios Amulius', vendu: '2018/03/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 15, produit: 'Leopold Gáspár', vendu: '2018/01/21', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 16, produit: 'Pompeius René', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 17, produit: 'Paĉjo Jadon', vendu: '2018/02/01', gagnant: 'XXXX', boutique: '0' },
            { id: 18, produit: 'Micheal Mercurius', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 19, produit: 'Ganesha Dubhghall', vendu: '2018/03/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 20, produit: 'Hiroto Šimun', vendu: '2018/01/21', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 21, produit: 'Vishnu Serghei', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 22, produit: 'Zbyněk Phoibos', vendu: '2018/02/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 23, produit: 'Aulus Agmundr', vendu: '2018/01/01', gagnant: 'XXXX', boutique: 'boutique XXX' },
            { id: 42, produit: 'Ford Prefect', vendu: '2001/05/25', gagnant: 'Alien', boutique: 'boutique XXX' }
      ]
      const [modal, setModal] = useState(false);
      const [modal2, setModal2] = useState(false);
      const [details, setDetails] = useState([])
      // const [items, setItems] = useState(usersData)

      const toggleDetails = (index) => {
            const position = details.indexOf(index)
            let newDetails = details.slice()
            if (position !== -1) {
                  newDetails.splice(position, 1)
            } else {
                  newDetails = [...details, index]
            }
            setDetails(newDetails)
      }


      const fields = [
            {
                  key: 'produit', _style: {
                        width: '40%',


                  }
            },

            'vendu',
            'gagnant',

            { key: 'boutique', _style: { width: '20%' } },
            {
                  key: 'show_details',
                  label: '',
                  _style: { width: '1%' },
                  sorter: false,
                  filter: false
            },

      ]



      return (
            <div>



                  <CDataTable
                        items={usersData}
                        fields={fields}
                        columnFilter
                        tableFilter
                        footer
                        itemsPerPageSelect
                        itemsPerPage={5}
                        hover
                        sorter
                        pagination

                        scopedSlots={{
                              'produit':
                                    (item) => (
                                          <td

                                          >
                                                <img src="https://images-na.ssl-images-amazon.com/images/I/41B642%2B-yXL._SY355_.jpg"
                                                      style={{
                                                            height: 50,
                                                            width: 50,
                                                            marginRight: 20,
                                                            objectFit: "contain"
                                                      }}
                                                ></img>
                                                {item.produit}

                                          </td>
                                    ),
                              'boutique':
                                    (item) => (
                                          <td>

                                                {item.boutique}

                                          </td>
                                    ),
                              'show_details':
                                    (item, index) => {
                                          return (
                                                <tr>
                                                      <td classproduit="py-2"
                                                            style={{
                                                                  flexDirection: 'row'
                                                            }}>
                                                            <CButton
                                                                  color="primary"
                                                                  variant="outline"
                                                                  shape="square"
                                                                  size="sm"
                                                                  onClick={() => { toggleDetails(index) }}
                                                            >
                                                                  Afficher
                                                </CButton>

                                                      </td>
                                                      <td>
                                                            <CButton
                                                                  color="danger"
                                                                  variant="outline"
                                                                  shape="square"
                                                                  size="sm"
                                                                  onClick={
                                                                        () => setModal2(!modal2)
                                                                  }
                                                            >
                                                                  Supprimer
                                                </CButton>
                                                      </td>
                                                </tr>
                                          )
                                    },
                              'details':
                                    (item, index) => {
                                          return (
                                                <CCollapse show={details.includes(index)} style={{
                                                      backgroundColor: "white",
                                                      justifyContent: "center",
                                                      alignItems: "center"
                                                }}>
                                                      <CCardBody
                                                            style={{
                                                                  display: "flex",
                                                                  flexDirection: "row"

                                                            }}
                                                      >
                                                            <div>
                                                                  <CImg
                                                                        src="https://images-na.ssl-images-amazon.com/images/I/41B642%2B-yXL._SY355_.jpg"
                                                                        className="c-c-avatar-square"

                                                                        style={{
                                                                              width: 200,

                                                                              height: 200,
                                                                              alignSelf: "flex-start",
                                                                              objectFit: "contain"

                                                                        }}

                                                                  />
                                                                  <div
                                                                        style={{
                                                                              display: "flex",
                                                                              flexDirection: "row",
                                                                              marginLeft: 30,
                                                                              textAlign: "start",


                                                                        }}
                                                                  >
                                                                        <p class="h3">IPHONE X RED </p>

                                                                  </div>
                                                            </div>
                                                            <div>

                                                                  <p class="h5">Description: </p>
                                                                  <p class="h6">Ecran 5,8" Super Retina HD 3D Touch (2436 x 1125 pixels)
                                                                  Face ID - Systéme d'exploitation: iOS 11 - Processeur: Apple A11
                                                                  Bionic Hexa-core 2,39 GHz - Mémoire RAM 3 Go - Stockage 64 Go
                                                                  Appareil photo Arriere: Dual 12 MP (Ouverture f/1.8, 28mm) + 12 MP
                                                                  (Ouverture f/2.4, 52mm) - Zoom numérique: jusqu’à 10 x - Appareil Avant 7
                                                                  MégaPixel (Ouverture ƒ/2,2) Retina Flash - Enregistrement vidéo 4K -
                                                                  HD 1080p avec Wifi, 4G et Bluetooth 5.0 - Batterie: lithium‑ion (2716 mAh)
                                                                  Temps de conversation Sans Fil: jusqu’à 21 heures - Lecture audio sans fil:
jusqu’à 60 heures  </p>

                                                            </div>
                                                            <div
                                                                  style={{
                                                                        marginLeft: 50,
                                                                        color: "red",
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        justifyContent: "space-between"
                                                                  }}
                                                            >
                                                                  <p class="h2">1200DT

                                                                     <p class="h6"
                                                                              style={{
                                                                                    color: "darkorange"
                                                                              }}
                                                                        >5600 jetons </p>
                                                                  </p>

                                                                  <p class="h5">Gangnant:
<br></br>
                                                                        <a href="#" class="h3"
                                                                              style={{
                                                                                    color: "darkorange"
                                                                              }}
                                                                        >XXXXXX </a>
                                                                  </p>
                                                                  <div
                                                                        style={{

                                                                              display: "flex",
                                                                              flexDirection: "row"
                                                                        }}
                                                                  >

                                                                        <CButton color="danger">Réclamer </CButton>

                                                                  </div>


                                                            </div>

                                                      </CCardBody>
                                                </CCollapse>
                                          )
                                    }
                        }}
                  />
                  <CModal
                        show={modal}
                        onClose={() => {
                              setModal(!modal);
                        }}
                        color="primary"
                  >
                        <CModalHeader closeButton>Ajouter un gagnant</CModalHeader>
                        <CModalBody>
                              <CRow>
                                    <CCol md="6">


                                          <CFormGroup >
                                                <CLabel htmlFor="nf-name">produit</CLabel>
                                                <CInput
                                                      type="text"
                                                      id="nf-name"
                                                      name="nf-name"
                                                      placeholder="produit"
                                                      autoComplete="produit"
                                                />


                                          </CFormGroup>
                                    </CCol>
                                    <CCol sm="6">
                                          <CFormGroup sm="6">
                                                <CLabel htmlFor="nf-email">Préproduit</CLabel>
                                                <CInput
                                                      type="text"
                                                      id="nf-lastname"
                                                      name="nf-lastname"
                                                      placeholder="Préproduit"
                                                      autoComplete="lastname"
                                                />

                                          </CFormGroup>
                                    </CCol>



                              </CRow>
                              <CRow>
                                    <CCol sm="12">
                                          <CFormGroup sm="12">
                                                <CLabel htmlFor="nf-email">Email</CLabel>
                                                <CInput
                                                      type="email"
                                                      id="nf-email"
                                                      name="nf-email"
                                                      placeholder="Email"
                                                      autoComplete="email"
                                                />

                                          </CFormGroup>
                                    </CCol>
                                    <CCol sm="12">
                                          <CFormGroup>
                                                <CLabel htmlFor="nf-password">Mot de passe</CLabel>
                                                <CInput
                                                      type="password"
                                                      id="nf-password"
                                                      name="nf-password"
                                                      placeholder="Mot de passe"
                                                      autoComplete="current-password"
                                                />

                                          </CFormGroup>
                                    </CCol>
                              </CRow>

                        </CModalBody>
                        <CModalFooter>
                              <CButton color="primary">Ajouter</CButton>{' '}
                              <CButton
                                    color="secondary"
                                    onClick={
                                          () => {
                                                setModal(!modal);
                                          }}
                              >Cancel</CButton>
                        </CModalFooter>
                  </CModal >
                  <CModal
                        show={modal2}
                        onClose={() => setModal2(!modal2)}
                        color="danger"
                  >
                        <CModalHeader closeButton>Modal title</CModalHeader>
                        <CModalBody>
                              Vous êtes sûr de supprimer ce gagnant ?
        </CModalBody>
                        <CModalFooter>
                              <CButton color="danger">Supprimer</CButton>{' '}
                              <CButton
                                    color="secondary"
                                    onClick={() => setModal2(!modal2)}
                              >Cancel</CButton>
                        </CModalFooter>
                  </CModal>
            </div >

      )
}
