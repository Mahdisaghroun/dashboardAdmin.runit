import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Login = () => {
  let history = useHistory();
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [Loading, setLoading] = useState(false)
  const [token, setToken] = useState('')
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Connection</h1>
                    <p className="text-muted">Se connecter a votre compte</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Nom d'utlisateur" autoComplete="username" onChange={
                        (e) => {
                          setusername(e.target.value)

                        }
                      } required />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Mot de passe" autoComplete="current-password" onChange={
                        (e) => {
                          setpassword(e.target.value)
                        }
                      } required />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type="submit" onClick={
                          () => {
                            if (username && password) {
                              setLoading(true)
                              //var axios = require('axios');
                              const data = JSON.stringify({ "username": username, "password": password });

                              const config = {
                                method: 'post',
                                url: 'http://192.168.1.14:8080/login',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Access-Control-Request-Method': 'POST',
                                  "Access-Control-Allow-Origin": "true"
                                },

                                data: data

                              };

                              axios(config)
                                .then(function (response) {
                                  setToken(response.headers.authorization)
                                  const config2 = {
                                    method: 'get',
                                    url: 'http://192.168.1.14:8080/adminpanel',
                                    headers: {
                                      "Authorization": response.headers.authorization
                                    }



                                  };
                                  axios(config2).then(res => {
                                    if (res.status == 200) {
                                      setLoading(false)
                                      localStorage.setItem('userToken', token);

                                      history.push("/");
                                    }
                                    else {
                                      setLoading(false)
                                      alert("Vous n'ete pas un admin")
                                    }
                                  }).catch(function (error) {
                                    setLoading(false)
                                    alert(error)
                                  });

                                })
                                .catch(function (error) {
                                  setLoading(false)
                                  alert(error)
                                });
                            }
                          }
                        } >Connecter</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0"

                        >Mot de passe oublié ?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

            </CCardGroup>
          </CCol>
        </CRow>

      </CContainer>
      {Loading && < CRow style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(1,1,1,0.5)",
        top: 0,
        justifyContent: "center",
        alignItems: "center"

      }}>
        <CSpinner color="primary" variant="grow" />
      </CRow>}
    </div >
  )
}

export default Login
