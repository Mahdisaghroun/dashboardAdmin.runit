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



export default function Partenaire() {
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
            { id: 0, nom: 'John Doe', enregistré: '2018/01/01', role: 'Guest', solde: '2000' },
            { id: 1, nom: 'Samppa Nori', enregistré: '2018/01/01', role: 'Member', solde: '2800' },
            { id: 2, nom: 'Estavan Lykos', enregistré: '2018/02/01', role: 'Staff', solde: '0' },
            { id: 3, nom: 'Chetan Mohamed', enregistré: '2018/02/01', role: 'Admin', solde: '2000' },
            { id: 4, nom: 'Derick Maximinus', enregistré: '2018/03/01', role: 'Member', solde: '10' },
            { id: 5, nom: 'Friderik Dávid', enregistré: '2018/01/21', role: 'Staff', solde: '2000' },
            { id: 6, nom: 'Yiorgos Avraamu', enregistré: '2018/01/01', role: 'Member', solde: '2000' },
            { id: 7, nom: 'Avram Tarasios', enregistré: '2018/02/01', role: 'Staff', solde: '0' },
            { id: 8, nom: 'Quintin Ed', enregistré: '2018/02/01', role: 'Admin', solde: '2000' },
            { id: 9, nom: 'Enéas Kwadwo', enregistré: '2018/03/01', role: 'Member', solde: '10' },
            { id: 10, nom: 'Agapetus Tadeáš', enregistré: '2018/01/21', role: 'Staff', solde: '2000' },
            { id: 11, nom: 'Carwyn Fachtna', enregistré: '2018/01/01', role: 'Member', solde: '2000' },
            { id: 12, nom: 'Nehemiah Tatius', enregistré: '2018/02/01', role: 'Staff', solde: '0' },
            { id: 13, nom: 'Ebbe Gemariah', enregistré: '2018/02/01', role: 'Admin', solde: '2000' },
            { id: 14, nom: 'Eustorgios Amulius', enregistré: '2018/03/01', role: 'Member', solde: '10' },
            { id: 15, nom: 'Leopold Gáspár', enregistré: '2018/01/21', role: 'Staff', solde: '2000' },
            { id: 16, nom: 'Pompeius René', enregistré: '2018/01/01', role: 'Member', solde: '2000' },
            { id: 17, nom: 'Paĉjo Jadon', enregistré: '2018/02/01', role: 'Staff', solde: '0' },
            { id: 18, nom: 'Micheal Mercurius', enregistré: '2018/02/01', role: 'Admin', solde: '2000' },
            { id: 19, nom: 'Ganesha Dubhghall', enregistré: '2018/03/01', role: 'Member', solde: '10' },
            { id: 20, nom: 'Hiroto Šimun', enregistré: '2018/01/21', role: 'Staff', solde: '2000' },
            { id: 21, nom: 'Vishnu Serghei', enregistré: '2018/01/01', role: 'Member', solde: '2000' },
            { id: 22, nom: 'Zbyněk Phoibos', enregistré: '2018/02/01', role: 'Staff', solde: '0' },
            { id: 23, nom: 'Aulus Agmundr', enregistré: '2018/01/01', role: 'Member', solde: '10' },
            { id: 42, nom: 'Ford Prefect', enregistré: '2001/05/25', role: 'Alien', solde: '0' }
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
            { key: 'nom', _style: { width: '40%' } },
            'enregistré',

            { key: 'solde', _style: { width: '20%' } },
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
                  <div style={{
                        flexDirection: "row",
                        textAlign: "end"
                  }}>
                        <CButton color="primary"
                              onClick={
                                    () => setModal(!modal)
                              }
                        >Ajouter un Partenaire</CButton>
                  </div>


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
                              'solde':
                                    (item) => (
                                          <td>

                                                {item.solde}

                                          </td>
                                    ),
                              'show_details':
                                    (item, index) => {
                                          return (
                                                <tr>
                                                      <td classnom="py-2"
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
                                                                  Consulter
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
                                                                  flexDirection: "column"

                                                            }}
                                                      >
                                                            <CImg
                                                                  src="https://assets.puzzlefactory.pl/puzzle/222/145/original.jpg"
                                                                  className="c-avatar-img"

                                                                  style={{
                                                                        width: 100,

                                                                        height: 100,
                                                                        alignSelf: "center",
                                                                        objectFit: "contain"

                                                                  }}

                                                            />
                                                            <div
                                                                  style={{
                                                                        display: "flex",
                                                                        flexDirection: "row",
                                                                        justifyContent: "center",
                                                                        textAlign: "center",


                                                                  }}
                                                            >
                                                                  <p class="h3">XXXX XXXXX</p>

                                                            </div>
                                                            <CTabs activeTab="home">
                                                                  <CNav variant="tabs"
                                                                        style={{

                                                                              alignSelf: "center",
                                                                              marginTop: 25

                                                                        }}>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="home">
                                                                                    Informations générales
          </CNavLink>
                                                                        </CNavItem>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="profile">
                                                                                    Activités
          </CNavLink>
                                                                        </CNavItem>
                                                                        <CNavItem>
                                                                              <CNavLink data-tab="messages">
                                                                                    Statistique
          </CNavLink>
                                                                        </CNavItem>
                                                                  </CNav>
                                                                  <CTabContent>
                                                                        <CTabPane data-tab="home"
                                                                              style={{
                                                                                    marginTop: 30
                                                                              }}
                                                                        >


                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Nom</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">Carla</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Prénom</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly",



                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Date de naissance</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">Téléphone</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">XXXX</p>
                                                                                    </div>
                                                                              </div>
                                                                        </CTabPane>
                                                                        <CTabPane data-tab="profile" style={{
                                                                              marginTop: 30
                                                                        }}>
                                                                              <div style={{
                                                                                    display: "flex",
                                                                                    flexDirection: "row",
                                                                                    justifyContent: "space-evenly"

                                                                              }}>
                                                                                    <div
                                                                                          style={{
                                                                                                width: 115
                                                                                          }}
                                                                                    >
                                                                                          <p class="h6">27/03/2021 13:22</p>
                                                                                    </div>
                                                                                    <div

                                                                                    >
                                                                                          <p class="h6">Achat de Pack Jetons(pack 1000)</p>
                                                                                    </div>
                                                                              </div>
                                                                        </CTabPane>
                                                                        <CTabPane data-tab="messages" style={{
                                                                              marginTop: 30
                                                                        }}>
                                                                              <div className="chart-wrapper">
                                                                                    <CChart type="doughnut" datasets={doughnut.datasets} labels={doughnut.labels} />
                                                                              </div>
                                                                        </CTabPane>
                                                                  </CTabContent>
                                                            </CTabs>
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
                        <CModalHeader closeButton>Ajouter un Partenaire</CModalHeader>
                        <CModalBody>
                              <CRow>
                                    <CCol md="6">


                                          <CFormGroup >
                                                <CLabel htmlFor="nf-name">Nom</CLabel>
                                                <CInput
                                                      type="text"
                                                      id="nf-name"
                                                      name="nf-name"
                                                      placeholder="Nom"
                                                      autoComplete="nom"
                                                />


                                          </CFormGroup>
                                    </CCol>
                                    <CCol sm="6">
                                          <CFormGroup sm="6">
                                                <CLabel htmlFor="nf-email">Prénom</CLabel>
                                                <CInput
                                                      type="text"
                                                      id="nf-lastname"
                                                      name="nf-lastname"
                                                      placeholder="Prénom"
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
                              Vous êtes sûr de supprimer ce Partenaire ?
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
