import React, { useState } from 'react'
import { CModal, CModalBody, CModalFooter, CModalHeader, CCol, CRow, CForm, CFormGroup, CLabel, CInput, CFormText, CButton } from '@coreui/react'
export default function ModalAdd() {
      const [modal, setModal] = useState(true);
      return (

            <CModal
                  show={modal}
                  onClose={() => {
                        setModal(!modal);
                  }}
                  color="danger"
            >
                  <CModalHeader closeButton>Ajouter un client</CModalHeader>
                  <CModalBody>
                        <CRow>
                              <CCol sm="4">
                                    <CForm action="" method="post">
                                          <CFormGroup>
                                                <CLabel htmlFor="nf-email">Email</CLabel>
                                                <CInput
                                                      type="email"
                                                      id="nf-email"
                                                      name="nf-email"
                                                      placeholder="Enter Email.."
                                                      autoComplete="email"
                                                />
                                                <CFormText className="help-block">Please enter your email</CFormText>
                                          </CFormGroup>
                                          <CFormGroup>
                                                <CLabel htmlFor="nf-password">Password</CLabel>
                                                <CInput
                                                      type="password"
                                                      id="nf-password"
                                                      name="nf-password"
                                                      placeholder="Enter Password.."
                                                      autoComplete="current-password"
                                                />
                                                <CFormText className="help-block">Please enter your password</CFormText>
                                          </CFormGroup>
                                    </CForm>
                              </CCol>
                        </CRow>
                  </CModalBody>
                  <CModalFooter>
                        <CButton color="danger">Supprimer</CButton>{' '}
                        <CButton
                              color="secondary"
                              onClick={
                                    () => {
                                          setModal(!modal);
                                    }}
                        >Cancel</CButton>
                  </CModalFooter>
            </CModal>

      )
}
