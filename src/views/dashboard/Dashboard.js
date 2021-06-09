import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'


const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    function fetching() {
      const token = localStorage.getItem('userToken')
      console.log(token)
      const config = {
        method: 'get',
        url: 'http://192.168.1.14:8080/adminpanel',
        headers: {
          "Authorization": token
        }

      };
      axios(config).then(res => {
        setdata(res.data)
        console.log(res.data['lastMonthActivity'][0])
      }).catch(err => {
        console.log(err)
      })
    }
    fetching()

  }, [])
  return (
    <>
      <WidgetsDropdown clientsNum={data['numberOfClients']} PartnersNum={data['numberOfPartners']} PointsSaleNum={data['numberOfSalesPoints']} />
      {/*  <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download" />
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{ height: '300px', marginTop: '40px' }} />
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Nouveau Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard> */}



      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Statistiques de nouveaux  utilisateurs
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="12" xl="12">

                  <CRow>
                    <CCol sm="4">
                      <CCallout color="info">
                        <small className="text-muted">Nouveau Clients</small>
                        <br />
                        <strong className="h4">{data['lastMonthActivity'][0]}</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="4">
                      <CCallout color="danger">
                        <small className="text-muted">Nouveau partenaires</small>
                        <br />
                        <strong className="h4">{data['lastMonthActivity'][1]}</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="4">
                      <CCallout color="warning">
                        <small className="text-muted">Nouveau points de ventes</small>
                        <br />
                        <strong className="h4">{data['lastMonthActivity'][2]}</strong>
                      </CCallout>
                    </CCol>

                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Lundi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Mardi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Mercredi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Jeudi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Venderedi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Samedi
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Dimanche
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                      <CProgress className="progress-xs" color="warning" value="78" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      Nouveau clients
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                      Nouveau Partenaires
                       &nbsp;
                        <sup className="px-1"><CBadge shape="pill" color="warning">&nbsp;</CBadge></sup>
                      Nouveau Points de ventes
                    </small>
                  </div>
                </CCol>


              </CRow>




            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <h4 id="traffic" className="card-title mb-0">Activitées des Admins</h4>
              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Admin</th>


                    <th>Activités</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />

                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>

                    </td>



                    <td>
                      <div className="small text-muted">Derniére connexion</div>
                      <strong>
                        Il y a 10 sec</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />

                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>

                    </td>



                    <td>
                      <div className="small text-muted">Derniére connexion</div>
                      <strong>
                        Il y a 10 minutes</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />

                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>

                    </td>


                    <td>
                      <div className="small text-muted">Derniére connexion</div>
                      <strong>Il ya 1 heure</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />

                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>

                    </td>

                    <td>
                      <div className="small text-muted">Derniére connexion</div>
                      <strong>Le mois dernier</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />

                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>

                    </td>



                    <td>
                      <div className="small text-muted">Derniére connexion</div>
                      <strong>La semaine dernière</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/6.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />

                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>

                    </td>


                    <td>
                      <div className="small text-muted">Derniére connexion</div>
                      <strong>Hier</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
